<template>
  <div class="page organizations">
    <com-common-bar
      :title="title"
      right-icon="icon-search"
      @onLeft="onRouterBack"
      @onRight="onSearchOrganizationAtList"
    />
    <van-empty v-if="list.length === 0" description="无内容"></van-empty>
    <van-list v-else>
      <div v-for="(item, index) in list" :key="index" class="organ-item">
        <com-list-organization :record="item" @onSubscribe="onSubscribe(id)" />
      </div>
    </van-list>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import { useRouter } from 'vue-router'
import { useOranizationHttp } from '@/features/useHttpGetOranization'
import { useStore } from 'vuex'
import { IRootState } from '@/store'
import ComCommonBar from '@/components/com-common-bar.vue'
import ComListOrganization from '@/components/com-list-organization.vue'

export default defineComponent({
  name: 'Organizations',
  components: {
    ComCommonBar,
    ComListOrganization,
  },
  setup() {
    // const store = useStore<IRootState>()
    const router = useRouter()
    // const { list, getNext } = useOranizationHttp()
    const list = ref([])
    const onRouterBack = () => {
      router.back()
    }
    return {
      title: '领养机构列表',
      onRouterBack,
      // onSearchOrganizationAtList,
      // onTriggerSubscribe,
      list,
    }
  },
})
</script>

<style lang="scss" scoped>
.organizations {
  width: 100%;
  font-size: 16px;
}
</style>
