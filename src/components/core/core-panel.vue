<template>
  <div :class="['core panel', className]">
    <h3 v-if="title" class="title">{{ title }}</h3>
    <div v-if="showMore" class="more" @click="$emit('onMore')">
      <span
        v-if="moreText"
        :style="{ textDecoration: showTextDecoration ? 'underline' : 'none' }"
      >
        {{ moreText }}
      </span>
      <i v-show="moreIcon" :class="['iconfont ', moreIcon]"></i>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CorePanel',
  props: {
    title: String,
    /** 外部样式类 */
    className: String,
    /** 是否展示 更多标签 */
    showMore: Boolean,
    /** 更多的提示文本 */
    moreText: String,
    /** 提示文本下划线 */
    showTextDecoration: {
      type: Boolean,
      default: true,
    },
    /** 更多的iconfont图标 */
    moreIcon: String,
  },
})
</script>

<style lang="scss" scoped>
.panel {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 0 10px;
  .title {
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    font-weight: 600;
  }
  .more {
    position: absolute;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    top: 6px;
    right: 10px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
