<template>
  <div v-if="record" :class="['com organization', className]">
    <van-image round width="1.3rem" height="1.3rem" :src="record.logoImg" />
    <p class="address">{{ record.address }}</p>
    <p class="title">{{ record.title }}</p>
    <p class="remark">{{ record.remark }}</p>
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

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
    const calc = computed(() => {
      const _scope = props.record?.scope
      console.log('scope: ', _scope)
      const num = _scope / 2
      const isHalf = Math.round(num) > num ? true : false
      if (isHalf) {
        return Math.floor(num) + 0.5
      } else {
        return Math.floor(num)
      }
    })

    return {
      calc,
    }
  },
})
</script>

<style lang="scss" scoped>
.organization {
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    padding: 4px 0;
    font-size: 12px;
    color: #999;
  }
  .title {
    font-size: 16px;
    color: #222;
  }
  .remark {
    color: #555;
  }
}
</style>
