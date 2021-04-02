<template>
  <div class="app">
    <router-view />
    <com-menu />
  </div>
</template>

<script lang="ts">
import ComMenu from '@/components/com-menu.vue'

export default {
  components: {
    ComMenu,
  },
}
</script>
<style lang="scss">
.app {
  width: 100%;
}
.page {
  width: 100%;
}
.com {
  width: 100%;
}
</style>
