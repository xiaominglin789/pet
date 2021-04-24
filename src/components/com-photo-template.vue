<template>
  <div
    v-if="record"
    :class="['com photo-template', className]"
    @click="onClickItem"
  >
    <van-image lazy-load :src="record.entryImg" class="entry-img"></van-image>
    <div class="info">
      <van-image
        round
        width="1.2rem"
        height="1.2rem"
        lazy-load
        :src="record.authorImg"
      ></van-image>
      <p class="info-des">
        <span class="info-shop" v-if="record.name">{{ record.name }}</span>
        {{ record.remark }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Toast } from 'vant'

export default defineComponent({
  name: 'ComOrganization',
  props: {
    className: String,
    record: {
      type: Object,
      default: () => null,
    },
  },
  setup(props, ctx) {
    const onClickItem = () => {
      Toast('测试: 查看达人晒照的达人动态: id = ' + props.record.id)
    }
    return {
      onClickItem,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/import.scss';

.photo-template {
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  .entry-img {
  }
  .info {
    @include flex-center;
    box-sizing: border-box;
    padding: 12px 6px;
    .info-des {
      flex: 1;
      color: #666;
      font-size: 12px;
      @include ellipsis(2);
      margin-left: 6px;
      /deep/img {
        display: inline-block !important;
      }
      .info-shop {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }
    }
  }
}
</style>
