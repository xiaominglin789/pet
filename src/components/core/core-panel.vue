<template>
  <div class="core panel">
    <h3 class="title" v-if="title">{{ title }}</h3>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CorePanel',
  props: {
    title: String,
  },
})
</script>

<style lang="scss" scoped>
.panel {
  width: 100%;
  h3 {
    width: 100%;
    height: 48px;
    line-height: 48px;
  }
}
</style>
