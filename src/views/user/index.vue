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
        <van-image
          @click="test"
          round
          width="2.2rem"
          height="2.2rem"
          :src="userInfo.img"
        />
      </template>
    </com-top-bar>
    <!-- 入口 -->
    <com-entry :entries="entries" :column="5" :border="false"></com-entry>
    <!-- 测试瀑布流 -->
    <core-panel
      title="生活相册"
      :showMore="true"
      moreText="更多"
      moreIcon="icon-right"
      @onMore="test"
    >
      <core-water-flow :list="imgList" @onClickItem="test"></core-water-flow>
    </core-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComTopBar from '@/components/com-topbar.vue'
import ComEntry from '@/components/com-entry.vue'
import CoreWaterFlow from '@/components/core/core-waterflow.vue'
import CorePanel from '@/components/core/core-panel.vue'

export default defineComponent({
  name: 'User',
  components: {
    ComTopBar,
    ComEntry,
    CoreWaterFlow,
    CorePanel,
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
      imgList: [
        {
          id: 1,
          img: 'https://picsum.photos/375/320?random=1',
          title: '',
        },
        {
          id: 2,
          img: 'https://picsum.photos/375/200?random=2',
          title: '',
        },
        {
          id: 3,
          img: 'https://picsum.photos/375/200?random=3',
          title: '',
        },
        {
          id: 4,
          img: 'https://picsum.photos/375/270?random=4',
          title: '',
        },
        {
          id: 5,
          img: 'https://picsum.photos/375/180?random=5',
          title: '',
        },
        {
          id: 6,
          img: 'https://picsum.photos/375/350?random=6',
          title: '',
        },
      ],
      userInfo: {
        name: '云养猫',
        tags: ['关注 20', '粉丝 98'],
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
      },
    }
  },
  setup(props, { emit }) {
    function test(params: any) {
      console.log('pet ', params)
    }
    function onClickSlideItem() {}
    return {
      test,
      onClickSlideItem,
    }
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
          font-size: 24px;
          font-weight: 600;
          margin-top: 8px;
          @include ellipsis;
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

  /** core-slider 子组件样式控制 */
  // &/deep/.pet-box {
  //   box-sizing: border-box;
  //   width: 200px;
  //   height: 120px;
  //   border-radius: 10px;
  //   background-color: rgb(253, 124, 38);
  //   margin-right: 10px;
  //   padding: 16px;
  //   position: relative;
  //   overflow: hidden;
  //   h3 {
  //     position: absolute;
  //     top: 0.7rem;
  //     left: 1.8rem;
  //     color: #ffffff;
  //     font-size: 18px;
  //     @include ellipsis;
  //   }
  //   p {
  //     color: #ffffff;
  //     font-size: 14px;
  //     @include ellipsis(2);
  //   }
  // }
  // &/deep/ul > li:first-child .pet-box {
  //   background-color: $app-bg-color-base;
  // }
}
</style>
