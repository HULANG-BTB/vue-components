import { createApp } from 'vue'
import App from './App.vue'

import Components from '../packages'

const examples = createApp(App)
examples.use(Components)
examples.mount('#app')

export default examples
