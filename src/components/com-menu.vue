<template>
  <div v-show="showMenu" :class="['com menu', className]">
    <router-link
      v-for="(item, index) in menu"
      :key="index"
      :to="item.to"
      @click.passive="onMenu(item)"
      class="menu-item"
      exact
    >
      <i :class="['iconfont', item.icon]"></i>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { IRootState } from '@/store'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: '',
  props: {
    className: String,
  },
  setup() {
    const store = useStore<IRootState>()
    const menu = [
      { id: 1, title: '首页', icon: 'icon-home', to: '/' },
      { id: 2, title: '论坛', icon: 'icon-release', to: '/found' },
      { id: 3, title: '服务', icon: 'icon-service', to: '/serve' },
      { id: 4, title: '我的', icon: 'icon-user', to: '/user' },
    ]

    const showMenu = computed(() => {
      return store.state.menu.showMenu
    })

    const onMenu = async (item: Record<string, any>) => {
      console.log('index: ', item.to)
      await store.dispatch('menu/setMenuActivePath', item.to)
    }

    return {
      onMenu,
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
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    .iconfont {
      font-size: 24px;
    }
  }
  .menu-item:hover {
    color: #fcd34c;
  }
  .link-exact-active-class {
    color: #fcd34c;
    .iconfont {
      transition: 0.3s;
      font-size: 28px;
    }
  }
}
</style>
