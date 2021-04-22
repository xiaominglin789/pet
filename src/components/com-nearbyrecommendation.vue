<template>
  <div v-if="record" class="com nearbyrecommendation" @click="onClickItem">
    <img class="entry-img" :src="record.entryImg" alt="" />
    <div class="info">
      <p class="info-name">record.name</p>
      <p class="info-tags">惺惺惺惺&nbsp;谢谢谢谢&nbsp;谢谢谢谢</p>
      <p class="info-adress">record.adaress</p>
      <p class="other-box">
        <van-button @click="onSubscribe" class="sub-bnt" size="mini" round>
          {{ subscribe ? '已预约' : '预约' }}
        </van-button>
        <span v-show="record.totalRecommend > 0">
          {{ record.totalRecommend }}条评论
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { NearbyRecommendationInfo } from '@/utils/types/nearby-recommendations'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: '',
  props: {
    record: {
      type: Object as PropType<NearbyRecommendationInfo>,
      default: () => null,
    },
    subscribe: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const onClickItem = () => {
      // 想要查看店铺
      emit('on-show-detail', props.record.id)
    }
    const onSubscribe = () => {
      // 点击预约
      emit('on-subscribe', props.record.id)
    }
    return {
      onClickItem,
      onSubscribe,
    }
  },
})
</script>

<style lang="scss" scoped>
.nearbyrecommendation {
  width: 100%;
  
}
</style>
