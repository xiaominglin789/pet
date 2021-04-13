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
      <core-panel
        v-if="detail?.description"
        className="desc-box"
        title="机构简介"
      >
        <p>{{ detail?.description }}</p>
      </core-panel>
      <core-panel
        v-if="detail?.description"
        className="adress-box"
        title="所在地址"
      >
        <p>{{ detail?.address }}</p>
      </core-panel>
      <core-panel
        v-if="organizationBeforePetsInfor?.pets"
        title="待领养爱宠"
        :more-text="String(organizationBeforePetsInfor.total)"
      >
        <core-slider
          className="pet-box"
          :list="organizationBeforePetsInfor?.pets"
        >
          <template v-slot:item="{ item }">
            <div class="before-pet">
              <van-image
                round
                width="1.2rem"
                height="1.2rem"
                :src="item?.entryImg"
              />
              <i
                :class="[
                  'iconfont',
                  item?.sex === 0 ? 'icon-woman' : 'icon-man',
                ]"
              ></i>
              <p>{{ item?.name }}</p>
              <van-button round type="info" size="mini">领养</van-button>
            </div>
          </template>
        </core-slider>
      </core-panel>
      <core-panel title="已领宠物">
        <template v-if="organizationAfterPetsInfor?.pets">
          <ul class="after-pets">
            <div class="left-pets">
              <li
                v-for="(item, index) in organizationAfterPetsInfor?.pets.slice(
                  0,
                  7,
                )"
                :key="index"
              >
                <van-image
                  width="1rem"
                  height="1rem"
                  round
                  :src="item.entryImg"
                ></van-image>
              </li>
              <li class="pet-show-more">
                <i class="iconfont icon-right"></i>
              </li>
            </div>
            <p class="right-tip" v-if="organizationAfterPetsInfor.total">
              历史{{ organizationAfterPetsInfor.total }}只
            </p>
          </ul>
        </template>
      </core-panel>
    </div>
    <div class="detail-recommend">
      <h3>
        评论
        <i v-show="recommendTotal">({{ recommendTotal }})</i>
      </h3>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="-- 没有更多数据了 --"
        :immediate-check="false"
        @load="onGetCommends"
      >
        <div
          class="recommend-box"
          v-for="(item, index) in recommends"
          :key="index"
        >
          <p class="content">{{ item.content }}</p>
          <div class="info">
            <div class="desc">
              <van-image
                width="1rem"
                height="1rem"
                round
                :src="item.img"
              ></van-image>
              &nbsp;
              <span>{{ item.name }}</span>
            </div>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import ComCommonBar from '@/components/com-common-bar.vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { IRootState } from '@/store'
import {
  getOrganizationDetailById,
  getOrganizationBeforePets,
  getOrganizationAfterPets,
} from '@/api/organization'
import {
  OrganizationDetailType,
  OrganizationPetsType,
} from '@/utils/types/organization'
import CoreSlider from '@/components/core/core-slider.vue'
import CorePanel from '@/components/core/core-panel.vue'
import { useHttpOrganizationCommends } from '@/features/useHttpOrganizationCommends'

export default defineComponent({
  name: 'OrganizationDetail',
  components: {
    ComCommonBar,
    CoreSlider,
    CorePanel,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore<IRootState>()
    const currentId = Number(route?.params?.id)
    const detail = ref<OrganizationDetailType>()
    const organizationBeforePetsInfor = ref<OrganizationPetsType>()
    const organizationAfterPetsInfor = ref<OrganizationPetsType>()
    const loading = ref(false)

    const {
      list: recommends,
      start: currStart,
      total: currTotal,
      isEnd: finished,
      getNext: getHttpCommends, // 数据请求
    } = useHttpOrganizationCommends(currentId)

    const onRouterBack = () => {
      router.back()
      detail.value?.description
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

    /** onload 触发-加载更多评论数据 */
    const onGetCommends = async () => {
      loading.value = false
      if (!finished.value) {
        await getHttpCommends(currStart.value)
      }
    }

    onMounted(async () => {
      store.dispatch('menu/setShowMenu', false)
      console.log('currentId', currentId)
      if (currentId) {
        detail.value = await getOrganizationDetailById(currentId)
        organizationBeforePetsInfor.value = await getOrganizationBeforePets(
          currentId,
        )
        organizationAfterPetsInfor.value = await getOrganizationAfterPets(
          currentId,
        )
      }
    })

    onUnmounted(() => {
      store.dispatch('menu/setShowMenu', true)
    })

    return {
      onRouterBack,
      onShare,
      detail,
      organizationBeforePetsInfor,
      organizationAfterPetsInfor,
      recommends,
      onGetCommends,
      loading,
      finished,
      recommendTotal: currTotal,
      calc,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/import.scss';

.organization-detail {
  width: 100%;
  .detail-head {
    margin-top: 10px;
    position: relative;
    width: 100%;
    .entry-box {
      width: 94%;
      height: 150px;
      margin: 0 auto 6px auto;
      box-sizing: border-box;
      position: relative;
      img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
      }
    }
    .entry-box::after {
      content: '';
      width: 90%;
      height: 0px;
      position: absolute;
      bottom: 3px;
      left: 50%;
      z-index: -1;
      transform: translateX(-50%);
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      box-shadow: 0px 0px 10px 6px #000000;
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
    margin: 80px 10px 10px 10px;
    background-color: #eee;
    box-sizing: border-box;
    padding: 10px 6px;
    border-radius: 12px;
    p {
      padding: 0 10px;
      color: #777;
    }
    .pet-box li:last-child .before-pet {
      margin-right: 0;
    }
    .before-pet {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      margin-right: 12px;
      position: relative;
      box-sizing: border-box;
      padding: 8px;
      border-radius: 8px;
      .iconfont {
        font-size: 12px;
        font-weight: 400;
        border-radius: 50%;
        position: absolute;
        left: 60px;
        top: 42px;
      }
      .icon-man {
        background-color: $app-bg-color-origin;
      }
      .icon-woman {
        background-color: $rank-bg-color-blue;
      }
      p {
        padding: 6px 0;
        font-size: 14px;
        font-weight: 500;
        color: #333;
      }
      .van-button {
        border: none;
        color: orange;
        border: 1px solid orange;
      }
    }
    .after-pets {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-pets {
        display: flex;
        white-space: nowrap;
      }
      .pet-show-more {
        width: 1rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid #cecece;
        i {
          font-size: 16px;
        }
      }
    }
  }
  .detail-recommend {
    margin: 10px;
    background-color: #eee;
    box-sizing: border-box;
    padding: 10px 6px;
    border-radius: 12px;
    h3 {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      padding: 0 10px;
      color: #777;
    }
    .recommend-box {
      box-sizing: border-box;
      border-bottom: 1px solid #e3e3e3;
      padding: 10px;
      .content {
        @include ellipsis(3);
      }
      .info {
        padding-top: 4px;
        @include flex;
        justify-content: space-between;
        align-items: center;
        .desc {
          @include flex;
          justify-content: space-between;
          align-items: center;
        }
        .date {
          color: #777;
        }
      }
    }
  }
}
</style>
