<template>
  <div id="#app">
    <comp-a />
    <comp-b />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { CompA, CompB } from '../' // 自动识别根目录下的package.json文件
import '../lib/theme-chalk/comp-a.css'
import '../lib/theme-chalk/comp-b.css'

export default defineComponent({
  name: 'App',
  components: { CompA, CompB }
})
</script>
