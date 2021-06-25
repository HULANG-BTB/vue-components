# components

这是一个通用的 Vue3.x + TypeScript 组件库框架，通过整个框架，可以快速搭建，并创建自己或公司的私有或内部组件库，同时使用 rollup 对组件库进行打包。

## 相关教程

博客：[从 0 到 1，搭建一个 VUE 组件库维护的基本框架](https://oibit.cn/Article/61)

掘金：[从 0 到 1，搭建一个 VUE 组件库维护的基本框架](https://juejin.cn/post/6943525029862703134)

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

### 创建一个组件

```bash
lerna create <组件名称>     # 组件名称为 @scope/组件名
yarn bootstrap
```

### 自定义配置

See [Configuration Reference](https://cli.vuejs.org/config/).
