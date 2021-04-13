<template>
  <div v-if="record" class="com interactive-box">
    <div class="up-box">
      <div class="info">
        <van-image round class="box-img" :src="record.icon"></van-image>
        <p class="name">{{ record.name }}</p>
        <p class="date">{{ record.publishDate }}</p>
      </div>
      <van-button
        round
        type="info"
        color="linear-gradient(to right, orange, orange)"
        size="small"
        @click="onClickFollow"
      >
        {{ isFollow ? '' : '关注' }}
      </van-button>
    </div>
    <!-- 此处内容暂时文字和图片分离 -->
    <div class="container">
      <p class="content" v-if="record.content">{{ record.content }}</p>
      <div class="imgs-box" v-if="record.imgs.length > 0">
        <van-image
          v-for="(child, index) in record.imgs"
          :key="index"
          width="30%"
          :src="child"
        ></van-image>
      </div>
    </div>
    <div class="tools">
      <span class="location">
        <i class="iconfont icon-location"></i>
        {{ record.address }}
      </span>
      <div class="boxs">
        <span @click="onClickLike">
          <i class="iconfont icon-favor"></i>
          {{ record.favorTotal }}
        </span>
        <span @click="onClickOpenComments">
          <i class="iconfont icon-message"></i>
          {{ record.commentTotal }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { InteractiveTrendsInfo } from '@/utils/types/interactive'

export default defineComponent({
  name: '',
  props: {
    record: {
      type: Object as PropType<InteractiveTrendsInfo>,
      default: () => null,
    },
    isFollow: Boolean,
    isLike: Boolean,
  },
  setup(props, { emit }) {
    const onClickFollow = () => {
      emit('on-click-follow', {
        id: props.record.publisherId,
        type: '用户',
        followStatus: !props.isFollow,
      })
    }

    const onClickLike = () => {
      emit('on-click-like', {
        id: props.record.publisherId,
        type: '用户',
        likeStatus: !props.isLike,
      })
    }

    const onClickOpenComments = () => {
      emit('on-click-like', props.record.id)
    }

    return {
      onClickFollow,
      onClickLike,
      onClickOpenComments,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/import.scss';

.interactive-box {
  box-sizing: border-box;
  width: 100%;
  background-color: #eee;
  padding: 4px 0 24px 0;
  .up-box {
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info {
      position: relative;
      padding-left: 54px;
      .box-img {
        position: absolute;
        left: 0;
        top: -6px;
        width: 48px;
        height: 48px;
      }
      .name {
        font-size: 14px;
        cursor: pointer;
      }
      .date {
        color: #777;
        margin-top: 4px;
      }
    }
  }
  .container {
    width: 100%;
    cursor: pointer;
    .content {
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 16px;
      color: #555;
      @include ellipsis(2);
    }
    .imgs-box {
      display: flex;
      justify-content: space-around;
      /deep/ img {
        border-radius: 4px !important;
      }
    }
  }
  .tools {
    width: 100%;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: inline-block;
      cursor: pointer;
    }
    .boxs {
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
