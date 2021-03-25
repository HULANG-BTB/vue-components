import { App } from 'vue'

import CompA from './comp-a'
import CompB from './comp-b'

const components = [CompA, CompB]

// 注册所有的组件
const install = function (app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 导出注册方法
export default {
  install
}

// 导出 单个组件
export { CompA, CompB }
