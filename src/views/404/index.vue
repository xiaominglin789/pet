<template>
  <div class="page 404">
    <com-common-bar title="404" left-text="首页" @onLeft="onHome" />
    <van-empty description="页面找不到"></van-empty>
  </div>
</template>

<script lang="ts">
import { IRootState } from '@/store'
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ComCommonBar from '@/components/com-common-bar.vue'

export default defineComponent({
  name: 'NotFound',
  components: {
    ComCommonBar,
  },
  setup() {
    const store = useStore<IRootState>()
    const router = useRouter()

    const onHome = () => {
      router.push('/')
    }

    onMounted(() => {
      store.dispatch('menu/setShowMenu', false)
    })

    onUnmounted(() => {
      store.dispatch('menu/setShowMenu', true)
    })
    return {
      onHome,
    }
  },
})
</script>

<style lang="scss" scoped></style>
