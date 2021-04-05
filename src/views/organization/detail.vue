<template>
  <div class="page organization-detail">
    <com-common-bar
      rightIcon="icon-share"
      @onLeft="onRouterBack"
      @onRight="onShare"
    />
    <div class="detail-head">
      <div class="entry-box">
        <img :src="detail?.entryImg" />
      </div>
      <div class="info-box">
        <van-image
          round
          width="1.3rem"
          height="1.3rem"
          :src="detail?.logoImg"
        />
        <p class="title">{{ detail?.title }}</p>
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
      </div>
    </div>
    <div class="detail-content">
      <div class="des-box"></div>
      <div class="adress-box"></div>
      <core-slider />
      <core-panel />
    </div>
    <div class="detail-recommend">
      <h3>评论(300+)</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import ComCommonBar from '@/components/com-common-bar.vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { IRootState } from '@/store'
import { getOrganizationDetailById } from '@/api/organization'
import { OranizationDetailType } from '@/utils/types/organization'
import CoreSlider from '@/components/core/core-slider.vue'

export default defineComponent({
  name: 'OrganizationDetail',
  components: {
    ComCommonBar,
    CoreSlider,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore<IRootState>()
    const currentId = Number(route?.params?.id)
    const detail = ref<OranizationDetailType>()

    const onRouterBack = () => {
      router.back()
    }

    const onShare = () => {
      // 调用第三方sdk实现分享功能
      console.log('todo: 调用第三方sdk实现分享功能')
    }

    /** 模拟评分计算 */
    const calc = computed(() => {
      if (!detail.value || Object.keys(detail.value).length === 0) return

      const num = ((detail.value.scope / detail.value.totalScope) * 10) / 2
      const isHalf = Math.round(num) > num ? true : false
      if (isHalf) {
        return Math.floor(num) + 0.5
      } else {
        return Math.floor(num)
      }
    })

    onMounted(async () => {
      store.dispatch('menu/setShowMenu', false)
      console.log('currentId', currentId)
      if (currentId) {
        detail.value = await getOrganizationDetailById(currentId)
      }
    })
    onUnmounted(() => {
      store.dispatch('menu/setShowMenu', true)
    })

    return {
      onRouterBack,
      onShare,
      detail,
      calc,
    }
  },
})
</script>

<style lang="scss" scoped>
.organization-detail {
  width: 100%;
  .detail-head {
    margin-top: 10px;
    position: relative;
    width: 100%;
    .entry-box {
      position: relative;
      width: 94%;
      height: 150px;
      margin: 0 auto;
      box-sizing: border-box;
      img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
      }
    }
    .entry-box::after {
      transition: 0.3s;
      content: '';
      width: 90%;
      height: 1px;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0px 2px 8px 4px #ccc;
    }
    .info-box {
      position: absolute;
      bottom: -70px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        padding: 10px 0 4px 0;
        font-size: 16px;
        font-weight: 600;
        color: #222;
      }
    }
  }
  .detail-content {
    width: 100px;
    box-sizing: border-box;
    padding: 12px;
    background-color: #eee;
  }
  .detail-recommend {
    width: 100px;
    box-sizing: border-box;
    padding: 12px;
    background-color: #eee;
  }
}
</style>
