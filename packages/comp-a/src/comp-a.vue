<template>
  <div class="comp-a">comp-a</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CompA'
})
</script>

<style lang="scss">
.comp-a {
  width: 200px;
  background-color: red;
}
</style>
