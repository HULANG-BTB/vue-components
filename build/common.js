const pkg = require('../package.json')

module.exports = {
  noElPrefixFile: /(utils|directives|hooks|locale)/,
  prefix: '', // 组件前缀
  suffix: '', // 组件后缀
  scope: pkg.name, // *必须* 组件范围 只有 @components 下的包内容才会被编译
  exclude: [], // 需要排除编译的包 如 工具类库 样式等
}
