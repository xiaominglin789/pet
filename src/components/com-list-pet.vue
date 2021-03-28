<template>
  <div
    v-if="record"
    :class="['com list-pet', className]"
    @click="onClickPet(record?.id)"
  >
    <div class="head-icon">
      <van-image :src="record.img"></van-image>
    </div>
    <div class="info-box">
      <h3 class="info-name">
        {{ record.name }}
        <i v-show="calcPetSexIcon" :class="['iconfont', calcPetSexIcon]"></i>
      </h3>
      <p class="info-age">{{ record.age }}</p>
      <p class="info-desc">{{ record.description }}</p>
      <van-tag class="info-remark" round>{{ record.remark }}</van-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ComListPet',
  props: {
    record: {
      type: Object,
      default: () => null,
    },
    className: String,
  },
  setup(props, { emit }) {
    const calcPetSexIcon = computed(() => {
      let petSexIcon = ''
      if (props.record?.sex === 1) {
        petSexIcon = 'icon-woman'
      }
      if (props.record?.sex === 0) {
        petSexIcon = 'icon-man'
      }
      return petSexIcon
    })
    /** 点击查看萌宠 */
    const onClickPet = (id: number) => {
      id && emit('onShow', id)
    }

    return {
      calcPetSexIcon,
      onClickPet,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/import.scss';

.list-pet {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 16px;
  background-color: #eee;
  border-radius: 8px;
  margin-bottom: 12px;
  .head-icon {
    width: 48px;
    /deep/img {
      min-width: 100%;
      border-radius: 4px;
    }
  }
  .info-box {
    flex: 1;
    position: relative;
    padding: 0 6px;
    display: flex;
    flex-direction: column;
    .info-name {
      font-size: 16px;
      font-weight: 600;
      @include ellipsis(2);
      .iconfont {
        font-size: 12px;
        font-weight: 400;
        border-radius: 50%;
        padding: 2px;
        margin-left: 2px;
      }
      .icon-man {
        background-color: $app-bg-color-origin;
      }
      .icon-woman {
        background-color: $rank-bg-color-blue;
      }
    }
    .info-age {
      @include ellipsis(1);
      color: #999;
    }
    .info-desc {
      @include ellipsis(3);
      margin-top: 6px;
      font-size: 14px;
      color: #666;
    }
    .info-remark {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 10px;
    }
  }
}
</style>
