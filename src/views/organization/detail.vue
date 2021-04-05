<template>
  <div class="page organization-detail">
    <com-common-bar @onLeft="onRouterBack" />
    <h3>机构详情页</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import ComCommonBar from '@/components/com-common-bar.vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { IRootState } from '@/store'
import { getOrganizationDetailById } from '@/api/organization'

export default defineComponent({
  name: 'OrganizationDetail',
  components: {
    ComCommonBar,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore<IRootState>()
    const currentId = Number(route?.params?.id)
    const detail = ref({})

    const onRouterBack = () => {
      router.back()
    }

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
    }
  },
})
</script>

<style lang="scss" scoped></style>
