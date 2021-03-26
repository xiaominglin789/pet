<template>
  <!-- <div v-if="entries?.length > 0" class="com entry">
    <div v-for="(item, index) in entries" :key="index" class="entry-box">
      <i :class="['iconfont', item.icon]"></i>
      <span>{{ item.title }}</span>
    </div>
  </div> -->
  <van-grid
    :gutter="gutter"
    :column-num="column"
    :border="border"
    :square="true"
    :clickable="clickable"
    class="com entry"
  >
    <van-grid-item
      v-for="(item, index) in entries"
      :key="index"
      :text="item.title"
      :to="item.to"
    >
      <template #icon>
        <i :class="['iconfont ', item.icon]"></i>
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type EntryType = {
  title: string
  icon: string
  to: string
}

export default defineComponent({
  name: 'ComEntry',
  props: {
    entries: {
      type: Array as PropType<Array<EntryType>>,
      default: () => [],
    },
    /** 列间距 */
    gutter: {
      type: Number,
      default: 0,
    },
    /** 列数 */
    column: {
      type: Number,
      default: 4,
    },
    /** 宫格排序方向: 'vertical' | 'horizontal' */
    direction: {
      type: String,
      default: 'vertical',
    },
    /** 边框, 默认显示 */
    border: {
      type: Boolean,
      default: true,
    },
    /** 点击反馈 */
    clickable: {
      type: Boolean,
      default: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.entry {
  width: 100%;
  .iconfont {
    font-size: 20px;
  }
}
</style>
