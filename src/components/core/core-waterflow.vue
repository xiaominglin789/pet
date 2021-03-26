<template>
  <div :class="['core water-flow', className]">
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
      default: () => [
        {
          id: 1,
          img: 'https://picsum.photos/375/320?random=1',
          title: '',
        },
        {
          id: 2,
          img: 'https://picsum.photos/375/200?random=2',
          title: '',
        },
        {
          id: 3,
          img: 'https://picsum.photos/375/200?random=3',
          title: '',
        },
        {
          id: 4,
          img: 'https://picsum.photos/375/270?random=4',
          title: '',
        },
        {
          id: 5,
          img: 'https://picsum.photos/375/180?random=5',
          title: '',
        },
        {
          id: 6,
          img: 'https://picsum.photos/375/350?random=6',
          title: '',
        },
      ],
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
