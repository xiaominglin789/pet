<template>
  <div v-if="record" class="com list-organization">
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
    <van-tag class="subscribe" round @click="$emit('onSubscribe', item.id)">
      {{ record.subscribe ? '已预约' : '预约' }}
    </van-tag>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { OranizationType } from '@/utils/types/organization'

export default defineComponent({
  name: '',
  props: {
    record: Object as PropType<OranizationType>,
    default: () => null,
  },
  setup(props, ctx) {
    /** 模拟评分计算 */
    const calc = computed(() => {
      const _scope = props.record?.scope || 0
      console.log('scope: ', _scope)
      const num = _scope / 2 || 5
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
  width: 100%;
  @include flex-center;
  box-sizing: border-box;
  border: 1px solid #eee;

  .info {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .subscribe {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
