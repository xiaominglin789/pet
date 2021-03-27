<template>
  <div v-if="list && list.length > 0" :class="['core slider', className]">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <slot name="item" :item="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoreSlider',
  props: {
    className: String,
    list: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  ul {
    width: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    li {
      display: inline-block;
    }
  }
}
</style>
