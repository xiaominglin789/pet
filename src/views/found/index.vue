<template>
  <!-- <div class="page found"></div> -->
  <van-pull-refresh
    v-model="isPullRefreshing"
    @refresh="onRefresh"
    class="page found"
    ref="currentRefresh"
  >
    <!-- 头部 -->
    <com-common-bar
      leftText="论坛"
      leftIcon=""
      rightIcon="icon-tip"
      @onRight="onClickBell"
      class="forum-head"
    ></com-common-bar>
    <!-- 健康指南 -->
    <core-panel v-if="healthEntryData" title="健康指南">
      <div class="forum-health-entry">
        <div class="infor" @click="onHealthEntry">
          <p class="title">{{ healthEntryData.title }}</p>
          <p class="remark">{{ healthEntryData.remark }}</p>
          <p>GO >>></p>
        </div>
        <div class="img-box" @click="onHealthEntry">
          <img :src="healthEntryData.img" />
        </div>
      </div>
    </core-panel>
    <!-- 达人互动 -->
    <core-panel title="达人互动 >" class="interactive-container">
      <van-list
        v-model:loading="loading"
        :finished="currentInteractivesRquestEnd"
        finished-text="--- end ---"
        :immediate-check="true"
        @load="onLoadMoreInteractives"
      >
        <com-list-interactive
          v-for="(item, index) in currentInteractives"
          :key="index"
          :record="item"
          @onClickFollow="onClickFollow"
          @onClickOpenComments="onClickOpenComments"
          @onClickLike="onClickLike"
        ></com-list-interactive>
      </van-list>
    </core-panel>
    <!-- 回到顶部 -->
    <div v-show="isToTopIcon" plain @click="onToTop" class="to-top">
      <i class="iconfont icon-up"></i>
    </div>
  </van-pull-refresh>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import ComCommonBar from '@/components/com-common-bar.vue'
import CorePanel from '@/components/core/core-panel.vue'
import { useHttpForumInteractiveListInfo } from '@/features/useHttpForumInteractiveListInfo'
import ComListInteractive from '@/components/com-list-interactive.vue'

export default defineComponent({
  components: { ComCommonBar, CorePanel, ComListInteractive },
  name: 'Found',
  setup() {
    const isPullRefreshing = ref(false)
    const isToTopIcon = ref(false)
    const currentRefresh = ref(null)
    const loading = ref(false)

    const {
      list: currentInteractives,
      start: currentInteractiveStart,
      isEnd: currentInteractivesRquestEnd,
      getNext: getCurrentInteractiveRequest,
    } = useHttpForumInteractiveListInfo()

    /** 页面手动刷新 */
    const onRefresh = () => {
      console.log('页面手动刷新')
      // TODO
      setTimeout(() => {
        isPullRefreshing.value = false
      }, 500)
    }

    /** 点击消息提示铃 */
    const onClickBell = () => {
      // TODO
      console.log('点击提示铃')
    }

    /** 查看专家答疑入口 */
    const onHealthEntry = () => {
      // TODO
      console.log('查看专家答疑入口')
    }

    /** 点击关注/取关 */
    const onClickFollow = (state: boolean) => {
      console.log('点击关注/取关')
    }

    /** 点击 打开评论列表 */
    const onClickOpenComments = (state: boolean) => {
      console.log('点击关注/取关')
    }

    /** 点击 点赞状态 */
    const onClickLike = () => {}

    /** 加载更多的达人动态数据 */
    const onLoadMoreInteractives = async () => {
      console.log('加载更多的达人动态数据')
      loading.value = false
      if (!currentInteractivesRquestEnd.value) {
        await getCurrentInteractiveRequest(currentInteractiveStart.value)
      }
    }

    /** 页面滚动事件 */
    const pageScrollEvent = (e?: Event) => {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      const minTopToShowIcon = 240
      setTimeout(() => {
        if (top <= minTopToShowIcon) {
          isToTopIcon.value = false
        } else {
          isToTopIcon.value = true
        }
      }, 500)
    }

    /** 回到顶部 */
    const onToTop = () => {
      // todo
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    onMounted(() => {
      // 监听页面滚动
      window.addEventListener('scroll', pageScrollEvent)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', pageScrollEvent)
    })

    return {
      currentRefresh,
      onClickBell,
      onHealthEntry,
      healthEntryData: {
        to: '/found/answering',
        img: 'https://picsum.photos/375/174?random=40',
        title: '权威解答疑难',
        remark: '专家为您解答',
      },
      isPullRefreshing,
      isToTopIcon,
      currentInteractives,
      loading,
      currentInteractivesRquestEnd,
      onClickFollow,
      onRefresh,
      onToTop,
      onLoadMoreInteractives,
      onClickOpenComments,
      onClickLike,
    }
  },
})
</script>

<style lang="scss" scoped>
.found {
  width: 100%;
  padding-bottom: 70px;
  position: relative;
  .forum-head {
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
  .forum-health-entry {
    position: relative;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    .infor {
      position: absolute;
      top: 50%;
      left: 25%;
      transform: translate(-50%, -25%);
      color: #fff;
      .title {
        font-size: 24px;
        font-weight: 600;
      }
      p {
        margin-top: 4px;
      }
    }
    .img-box {
      width: 100%;
      img {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
  .interactive-container {
    box-sizing: border-box;
    width: 100%;
    border-radius: 6px;
    .van-list {
      margin: 0 10px;
      background-color: #eee;
      border-radius: 8px;
      padding: 10px;
    }
  }
  .to-top {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: fixed;
    bottom: 78px;
    right: 32px;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    color: #fff;
  }
}
</style>
