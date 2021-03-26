<template>
  <div class="page user">
    <com-top-bar>
      <template v-slot:left>
        <div class="user-info">
          <div class="infos">
            <h3>云吸猫</h3>
            <div class="tags">
              <span class="tag">关注20</span>
              &nbsp;
              <span class="tag">粉丝98</span>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:right>
        <van-image
          round
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </template>
    </com-top-bar>
    <!-- 入口 -->
    <com-entry :entries="entries" :column="5" :border="false"></com-entry>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComTopBar from '@/components/com-topbar.vue'
import ComEntry from '@/components/com-entry.vue'

export default defineComponent({
  name: 'User',
  components: {
    ComTopBar,
    ComEntry,
  },
  data: () => {
    return {
      entries: [
        {
          title: '领养',
          icon: 'icon-pet',
          to: '',
        },
        {
          title: '寄养',
          icon: 'icon-release',
          to: '',
        },
        {
          title: '服务',
          icon: 'icon-serve',
          to: '',
        },
        {
          title: '收藏',
          icon: 'icon-collection',
          to: '',
        },
        {
          title: '设置',
          icon: 'icon-setting',
          to: '',
        },
      ],
    }
  },
  methods: {
    test() {
      console.log('dog')
    },
  },
})
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  .user-pets {
    display: flex;
    .pet-box {
      flex: 1;
    }
  }
}
</style>
