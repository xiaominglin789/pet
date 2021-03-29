<template>
  <router-view />
  <com-menu />
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
.page {
  width: 100%;
}
.com {
  width: 100%;
}
</style>
