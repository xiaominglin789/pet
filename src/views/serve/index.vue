<template>
  <div class="page serve">
    <span hidden>服务页</span>
    <com-common-bar
      leftText="论坛"
      leftIcon=""
      rightIcon="icon-location"
      rightText="&nbsp;位置"
      @onRight="onClickLocation"
      class="serve-head"
    ></com-common-bar>
    <!-- 入口 -->
    <com-entry
      class="entry-container"
      :entries="entries"
      :column="5"
      :border="false"
    ></com-entry>
    <!-- 达人晒照 -->
    <core-panel
      class="photo-container"
      title="猫照"
      :showMore="true"
      moreIcon="icon-right"
      @onMore="onClickShowMore"
    >
      <core-slider></core-slider>
    </core-panel>
    <!-- 附近推荐 -->
    <core-panel class="near-container" title="附件推荐">
      <van-list
        v-model:loading="loading"
        :finished="currentNearbyRecommendationRquestEnd"
        finished-text="--- end ---"
        :immediate-check="false"
        offset="100"
        @load="onLoadMoreNearbyRecommendations"
      >
        <ComNearbyRecommendation
          v-for="(child, index) in nearbyRecommendationList"
          :key="index"
          class="nearcommend-box"
          :record="child"
        />
      </van-list>
    </core-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Toast } from 'vant'
import comCommonBar from '@/components/com-common-bar.vue'
import comEntry from '@/components/com-entry.vue'
import corePanel from '@/components/core/core-panel.vue'
import coreSlider from '@/components/core/core-slider.vue'
import { useHttpNearbyRecommendation } from '@/features/useHttpNearbyRecommendation'
import ComNearbyRecommendation from '@/components/com-nearbyrecommendation.vue'

export default defineComponent({
  components: {
    comCommonBar,
    comEntry,
    corePanel,
    coreSlider,
    ComNearbyRecommendation,
  },
  name: 'Serve',
  setup() {
    const loading = ref(false)
    const {
      list: nearbyRecommendationList,
      start: currentNearbyRecommendationStart,
      // limit: currentNearbyRecommendationLimit,
      isEnd: currentNearbyRecommendationRquestEnd,
      // reset: resetNearbyRecommendationRequest,
      getNext: getCurrentNearbyRecommendationRequest,
      total,
    } = useHttpNearbyRecommendation('南京')

    const onLoadMoreNearbyRecommendations = async () => {
      console.log('总条数: ', total.value)
      console.log('请求结束 ? : ', currentNearbyRecommendationRquestEnd.value)

      await getCurrentNearbyRecommendationRequest(
        currentNearbyRecommendationStart.value,
      )
      loading.value = false
    }

    onMounted(() => {
      onLoadMoreNearbyRecommendations()
    })

    const onClickLocation = () => {
      Toast('定位-待实现...')
    }

    const onClickShowMore = () => {}

    return {
      onClickLocation,
      entries: [
        { title: '商店', icon: 'icon-shop', to: '/' },
        { title: '医院', icon: 'icon-hospital', to: '/' },
        { title: '护理', icon: 'icon-release', to: '/' },
        { title: '摄影', icon: 'icon-photo', to: '/' },
        { title: '配对', icon: 'icon-match', to: '/' },
      ],
      loading,
      nearbyRecommendationList,
      currentNearbyRecommendationRquestEnd,
      onLoadMoreNearbyRecommendations,
      onClickShowMore,
    }
  },
})
</script>

<style lang="scss" scoped>
.serve {
  width: 100%;
  padding-bottom: 70px;
  position: relative;
  .serve-head {
    width: 100%;
    height: 72px;
    line-height: 72px;
    /deep/.common-box {
      box-shadow: none !important;
      padding: 0 16px !important;
      .left span {
        font-size: 24px;
        font-weight: 600;
      }
      .iconfont {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .entry-container {
    /deep/.van-grid-item__text {
      padding-top: 6px !important;
    }
  }
  .photo-container {
    height: 200px;
  }
  .near-container {
  }
}
</style>
