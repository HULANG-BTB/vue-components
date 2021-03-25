import { App } from 'vue'

import CompB from './src/comp-b.vue'

// 为组件添加注册方法
CompB.install = (app: App): void => {
  app.component(CompB.name, CompB)
}

export default CompB
