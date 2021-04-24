<template>
  <div v-if="record" class="com nearbyrecommendation" @click="onClickItem">
    <van-image
      width="100"
      height="64"
      class="entry-img"
      lazy-load
      :src="record.entryImg"
    ></van-image>
    <div class="info">
      <p class="info-name">{{ record.name }}</p>
      <p class="info-tags" v-if="tagArrayStr">{{ tagArrayStr }}</p>
      <p class="info-address">{{ record.location }}</p>
      <p class="other-box">
        <van-button
          @click="onSubscribe"
          :class="subscribeStatus ? 'sub-btn-active' : ''"
          size="small"
          round
        >
          {{ subscribeStatus ? '已预约' : '未预约' }}
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
import { computed, defineComponent, PropType, ref } from 'vue'
import { Toast } from 'vant'

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
    const subscribeStatus = ref(props.subscribe)

    const onClickItem = () => {
      // 想要查看店铺
      Toast('测试: 准备查看 ' + props.record.name)
      emit('on-show-detail', props.record.id)
    }

    const onSubscribe = () => {
      // 点击预约
      Toast('测试：预约状态切换,未处理网络请求')
      subscribeStatus.value = !subscribeStatus.value

      emit('on-subscribe', props.record.id)
    }

    const tagArrayStr = computed(() => {
      let temp = ''
      if (props.record.tags.length > 0) {
        temp += '['
        props.record.tags.forEach((el) => {
          temp += el + ' '
        })
        temp += ']'
      }
      return temp
    })
    return {
      tagArrayStr,
      onClickItem,
      onSubscribe,
      subscribeStatus,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/import.scss';

.nearbyrecommendation {
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0 0 6px 0;
  @include flex;
  justify-content: space-around;
  box-shadow: 1px 2px 4px 1px #eee;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .entry-img {
    /deep/img {
      border-radius: 8px;
    }
  }
  .info {
    p {
      padding-top: 4px;
    }
    .info-name {
      @include ellipsis(1);
    }
    .info-tags {
      font-size: 14px;
      color: #444;
      @include ellipsis(1);
    }
    .info-address {
      @include ellipsis(1);
      font-size: 14px;
      color: #666;
    }
    .other-box {
      @include flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      /deep/.van-button {
        background-color: orange !important;
        font-size: 10px !important;
        color: white !important;
        padding: 0px 14px !important;
      }
      /deep/.van-button.sub-btn-active {
        background-color: orangered !important;
      }
    }
  }
}
</style>
