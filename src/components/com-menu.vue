<template>
  <div v-show="showMenu" :class="['com menu', className]">
    <div
      v-for="(item, index) in menu"
      :class="['menu-item', index == active ? 'active' : '']"
      :key="index"
      @click="onMenu(index)"
    >
      <i :class="['iconfont', item.icon]"></i>
      <span class="menu-tittle" v-text="item.title"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { IRootState } from '@/store'
import { computed, defineComponent, onBeforeMount, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: '',
  props: {
    className: String,
  },
  setup() {
    const router = useRouter()
    const store = useStore<IRootState>()
    const route = useRoute()
    console.log(route)

    const menu = [
      { id: 1, title: '首页', icon: 'icon-home', to: '/' },
      { id: 2, title: '论坛', icon: 'icon-release', to: '/found' },
      { id: 3, title: '服务', icon: 'icon-service', to: '/serve' },
      { id: 4, title: '我的', icon: 'icon-user', to: '/user' },
    ]

    const active = computed(() => {
      return store.state.menu.menuActive
    })
    const showMenu = computed(() => {
      return store.state.menu.showMenu
    })

    onBeforeMount(async () => {
      await onMenu(active.value)
    })

    const onMenu = async (index: number) => {
      await store.dispatch('menu/setMenuActive', index)
      router.push({ path: menu[active.value].to })
    }

    return {
      onMenu,
      active,
      showMenu,
      menu,
    }
  },
})
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 5px 2px #ccc;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #fff;
  .menu-item {
    box-sizing: border-box;
    flex: 1;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    .iconfont {
      font-size: 24px;
    }
  }
  .active {
    color: #fcd34c;
    .iconfont {
      transition: 0.3s;
      font-size: 28px;
    }
  }
}
</style>
