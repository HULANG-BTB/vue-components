/* eslint-disable */
import path from 'path'
import pkg from '../package.json'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'

const deps = Object.keys(pkg.dependencies || {})

import fs from 'fs'

const readdirectory = (dir) => {
  const list = fs.readdirSync(dir)
  const ret = []
  list.forEach((filename) => {
    const dist = path.resolve(dir, filename)
    const stat = fs.statSync(dist)
    if (stat.isFile()) {
      if (filename === 'index.ts') {
        ret.push(dist)
      }
    } else {
      ret.push(...readdirectory(dist))
    }
  })
  return ret
}
const indexlist = readdirectory(path.resolve(__dirname, '../packages'))

const configs = indexlist
  .filter((dist) => dist.indexOf('packages\\index.ts') === -1) // 忽略packages/index.ts 只编译子模块
  .map((dist) => ({
    input: dist, //入口
    output: {
      format: 'es',
      file: dist.replace('packages', 'lib').replace('.ts', '.js') // 设置输出目录
    },
    plugins: [
      terser(),
      nodeResolve(),
      vue({
        target: 'browser', // 服务端渲染使用 'node'
        css: false,
        exposeFilename: false
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false // 编译模块时不输出类型声明
          },
          include: ['packages/**/*', 'typings/vue-shim.d.ts'],
          exclude: ['node_modules']
        },
        abortOnError: false
      })
    ], // 插件
    external(id) {
      return /^vue/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
    }
  }))

export default configs
