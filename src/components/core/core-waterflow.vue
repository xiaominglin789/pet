<template>
  <div v-if="list && list.length > 0" :class="['core water-flow', className]">
    <h3 v-if="title">{{ title }}</h3>
    <ul :style="{ 'column-count': count }">
      <li v-for="(item, index) in list" :key="index">
        <img @click="onScale(item.img)" :src="item.img" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoreWaterFlow',
  props: {
    /** 外部样式类名 */
    className: String,
    /** 标题栏 */
    title: String,
    /** 列数 */
    count: {
      type: Number,
      default: 2,
    },
    /** 图片列表 */
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const onScale = (url: string) => {
      console.log(url)
      url && emit('onShow', url)
    }
    return {
      onScale,
    }
  },
})
</script>

<style lang="scss" scoped>
.water-flow {
  width: 100%;
  h3 {
    width: 100%;
    height: 32px;
    line-height: 32px;
  }
  ul {
    width: 100%;
    padding: 0 10.5px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      overflow: auto;
      padding-bottom: 10px;
      img {
        border-radius: 10px;
      }
    }
  }
}
</style>
