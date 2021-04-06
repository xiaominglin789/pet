<template>
  <div v-if="record" class="'com list-organization">
    <van-image
      :src="record.logoImg"
      width="1.3rem"
      height="1.3rem"
      round
    ></van-image>
    <div class="info">
      <p class="title">{{ record.title }}</p>
      <van-rate
        size="12"
        v-model="calc"
        allow-half
        color="#f57b06"
        void-color="#f57777"
        icon="like"
        void-icon="like-o"
        :count="5"
        readonly
      ></van-rate>
      <p class="title">
        {{ record.title }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ record.address }}
      </p>
    </div>
    <van-tag class="rank" round v-show="rank">
      <i class="iconfont icon-serve"></i>
      &nbsp;
      {{ rank }}
    </van-tag>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { OrganizationType } from '@/utils/types/organization'

export default defineComponent({
  name: '',
  props: {
    record: {
      type: Object as PropType<OrganizationType>,
      default: () => null,
    },
    rank: Number,
  },
  setup(props, ctx) {
    /** 模拟评分计算 */
    const calc = computed(() => {
      const num = ((props.record.scope / props.record.totalScope) * 10) / 2
      const isHalf = Math.round(num) > num ? true : false
      if (isHalf) {
        return Math.floor(num) + 0.5
      } else {
        return Math.floor(num)
      }
    })

    return {
      calc,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/import.scss';

.list-organization {
  position: relative;
  width: 94%;
  margin: 0 auto;
  @include flex;
  box-sizing: border-box;
  margin-top: 16px;
  padding: 16px;
  justify-content: flex-start;
  border-radius: 12px;
  box-shadow: 2px 2px 4px 1px #eee;
  .info {
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .rank {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    padding: 6px 12px;
    cursor: pointer;
  }
}
</style>
