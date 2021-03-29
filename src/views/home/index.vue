<template>
  <div class="page home">home</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()

    function toSelf() {
      router.push({ path: '/test' })
    }

    return {
      toSelf,
    }
  },
})
</script>

<style lang="scss" scoped></style>
