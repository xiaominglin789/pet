<template>
  <div class="page organizations">
    <com-common-bar
      title="机构列表"
      right-icon="icon-search"
      @onLeft="onRouterHome"
    />
    <van-empty v-if="list.length === 0" description="无内容"></van-empty>
    <van-list v-else>
      <div v-for="(item, index) in list" :key="index" class="organ-item">
        <com-list-organization
          :rank="item.scope"
          :record="item"
          @click="onShowDeatil(item.id)"
        />
      </div>
    </van-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useOranizationHttp } from '@/features/useHttpGetOranization'
import { useStore } from 'vuex'
import ComListOrganization from '@/components/com-list-organization.vue'
import { IRootState } from '@/store'
import ComCommonBar from '@/components/com-common-bar.vue'

export default defineComponent({
  name: 'Organizations',
  components: {
    ComListOrganization,
    ComCommonBar,
  },
  setup() {
    const store = useStore<IRootState>()
    const router = useRouter()
    const { list, get } = useOranizationHttp()

    // 点击查看机构详情
    const onShowDeatil = (id: number) => {
      if (!id) return
      router.push({ path: '/organization/' + id })
    }

    const onRouterHome = () => {
      router.push({ path: '/' })
    }

    onMounted(async () => {
      store.dispatch('menu/setShowMenu', false)
      await get()
      listSelfSort(true)
    })

    onUnmounted(() => {
      store.dispatch('menu/setShowMenu', true)
    })

    const listSelfSort = (desc: boolean) => {
      list.value.sort((a, b) => {
        return desc ? b.scope - a.scope : a.scope - b.scope
      })
      console.log(list.value)
    }

    return {
      title: '领养机构列表',
      // onSearchOrganizationAtList,
      onShowDeatil,
      list,
      onRouterHome,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/import.scss';

.organizations {
  width: 100%;
  font-size: 16px;
  .organ-item:nth-child(1) {
    /deep/.rank {
      background-color: $rank-bg-color-red;
    }
  }
  .organ-item:nth-child(2) {
    /deep/.rank {
      background-color: $rank-bg-color-purple;
    }
  }
  .organ-item:nth-child(3) {
    /deep/.rank {
      background-color: $rank-bg-color-blue;
    }
  }
}
</style>
