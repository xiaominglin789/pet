<template>
  <div :class="['com topbar', className]">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComTopBar',
  props: {
    /** 外部样式类 */
    className: String,
  },
})
</script>

<style lang="scss" scoped>
.topbar {
  min-height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
