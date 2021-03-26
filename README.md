# components

这是一个通用的Vue3.x + TypeScript组件库框架，通过整个框架，可以快速搭建，并创建自己或公司的私有或内部组件库，同时使用rollup对组件库进行打包。

## 依赖安装
```bash
yarn install
```

### 开发
```bash
yarn serve
```

### 构建
```bash
yarn build # 全量构建 包含esm、und、esm-bundle、theme
yarn build:esm-bundle # 全量构建 构建esm-bundle库
yarn build:esm # 构建 es 模块 适用于组件按需引入
yarn build:umd # 构建 umd 模块 适用于通用的浏览器使用
yarn build:theme # 构建 scss 主题
```

### 修复 lint
```bash
yarn lint
```

### 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).
