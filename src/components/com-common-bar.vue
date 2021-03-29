<template>
  <div class="com">
    <span hidden>通用头部导航条</span>
    <com-top-bar class-name="common-box">
      <template v-slot:left>
        <div class="left" @click="$emit('onLeft')">
          <i :class="['iconfont', leftIcon]"></i>
          <span v-if="leftText" v-text="leftText"></span>
        </div>
      </template>
      <template v-slot:center>
        <div class="center" @click="$emit('onCenter')">
          <span v-if="title">{{ title }}</span>
        </div>
      </template>
      <template v-slot:right>
        <div class="right" @click="$emit('onRight')">
          <i v-if="rightIcon" :class="['iconfont', rightIcon]"></i>
          <span v-if="rightText" v-text="rightText"></span>
        </div>
      </template>
    </com-top-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComTopBar from '@/components/com-topbar.vue'

export default defineComponent({
  name: 'ComCommonBar',
  components: {
    ComTopBar,
  },
  props: {
    leftText: String,
    rightText: String,
    leftIcon: {
      type: String,
      default: 'icon-left',
    },
    title: {
      type: String,
      default: '未找到',
    },
    rightIcon: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.common-box {
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 20px;
  padding: 0 10px;
  box-shadow: 0px 1px 1px 1px #eee;
  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    box-sizing: border-box;
    .iconfont {
      font-size: 18px;
    }
    span {
      padding-left: 2px;
      font-size: 16px;
    }
  }
}
</style>
