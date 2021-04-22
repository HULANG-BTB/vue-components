/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const pkg = require('./package.json')
const tsconfig = require('./tsconfig.json')

module.exports = {
  pages: {
    examples: {
      // page 的入口
      entry: 'examples/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Examples'
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('packages', path.resolve(__dirname, './packages'))
    config.resolve.alias.set(pkg.name, path.resolve(__dirname))
    Object.keys(tsconfig.compilerOptions.paths).forEach((key) => {
      tsconfig.compilerOptions.paths[key].forEach((val) => {
        config.resolve.alias.set(key, path.resolve(__dirname, val))
      })
    })
  }
}
