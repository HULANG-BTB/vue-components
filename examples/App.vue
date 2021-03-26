<template>
  <div id="#app">
    <comp-a />
    <comp-b />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { CompA, CompB } from '../packages'
import '../packages/theme-chalk/lib/comp-a.css'
import '../packages/theme-chalk/lib/comp-b.css'

export default defineComponent({
  name: 'App',
  components: { CompA, CompB }
})
</script>
