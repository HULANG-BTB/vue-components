import { App } from 'vue'

import CompA from './src/comp-a.vue'

// 为组件添加注册方法
CompA.install = (app: App): void => {
  app.component(CompA.name, CompA)
}

export default CompA
