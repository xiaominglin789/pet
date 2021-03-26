<template>
  <div class="page user">
    <com-top-bar class-name="user-box">
      <template v-slot:left>
        <div class="user-info">
          <div class="infos">
            <h3 v-if="userInfo?.name">{{ userInfo.name }}</h3>
            <div class="tags">
              <van-tag
                v-for="(tag, index) in userInfo.tags"
                :key="index"
                class="tag"
              >
                {{ tag }}
              </van-tag>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:right>
        <van-image round width="2.2rem" height="2.2rem" :src="userInfo.img" />
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
      userInfo: {
        name: '云养猫',
        tags: ['关注 20', '粉丝 98'],
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
      },
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
@import '@/assets/style/import.scss';

.user {
  width: 100%;
  .user-box {
    padding: 10px;
    .user-info {
      .infos {
        h3 {
          @include ellipsis;
          font-size: 24px;
          font-weight: 600;
          margin-top: 8px;
        }
        .tags {
          @include ellipsis(3);
          box-sizing: border-box;
          padding-top: 4px;
          .tag {
            box-sizing: border-box;
            margin: 4px 8px 0 0;
            padding: 2px 10px;
            background-color: rgb(236, 236, 236);
            color: rgb(136, 136, 136);
            font-size: 10px;
            border-radius: 4px;
          }
        }
      }
    }
  }
  .user-pets {
    display: flex;
    .pet-box {
      flex: 1;
    }
  }
}
</style>
