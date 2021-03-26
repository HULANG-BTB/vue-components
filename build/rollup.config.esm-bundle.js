/* eslint-disable */
import path from 'path'
import pkg from '../package.json'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'

const deps = Object.keys(pkg.dependencies || {})

export default [
  {
    input: path.resolve(__dirname, '../packages/index.ts'), //入口
    output: {
      format: 'es',
      file: 'lib/index.esm.js'
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
            declaration: true
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
  }
]
