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
    <!-- 测试core-panel和core-slider组件 -->
    <core-panel
      title="猫照"
      :showMore="true"
      moreIcon="icon-right"
      moreText="查看更多"
      @onMore="test"
    >
      <img :src="userInfo.img" />
    </core-panel>
    <!-- 水平滑动组件 -->
    <core-panel title="我的爱宠">
      <core-slider :list="myPets">
        <!-- 想在外部传入子项的样式结构 -->
        <template v-slot:item="{ item }">
          <div class="pet-box" @click="onClickSlideItem(item)">
            <van-image
              class="pet-img"
              width="1.2rem"
              height="1.2rem"
              round
              :src="item.img"
            />
            <h3 v-if="item.name">{{ item.name }}</h3>
            <p v-if="item.desctription">{{ item.desctription }}</p>
          </div>
        </template>
      </core-slider>
    </core-panel>
    <!-- 分割线 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComTopBar from '@/components/com-topbar.vue'
import ComEntry from '@/components/com-entry.vue'
import CorePanel from '@/components/core/core-panel.vue'
import CoreSlider from '@/components/core/core-slider.vue'

export default defineComponent({
  name: 'User',
  components: {
    ComTopBar,
    ComEntry,
    CorePanel,
    CoreSlider,
  },
  data: () => {
    return {
      myPets: [
        {
          id: 1,
          name:
            '云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫',
          img: 'https://picsum.photos/64/64?random=1',
          desctription:
            '正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财正宗旺财!',
        },
        {
          id: 2,
          name: '招财',
          img: 'https://picsum.photos/64/64?random=2',
          desctription: '懒猫!',
        },
      ],
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
        name:
          '云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫云养猫',
        tags: ['关注 20', '粉丝 98'],
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
      },
    }
  },
  methods: {
    test(params: any) {
      console.log('pet ')
    },
    onClickSlideItem() {},
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
  &/deep/.pet-box {
    box-sizing: border-box;
    width: 200px;
    height: 120px;
    border-radius: 10px;
    background-color: rgb(253, 124, 38);
    margin-right: 10px;
    padding: 16px;
    position: relative;
    overflow: hidden;
    h3 {
      position: absolute;
      top: 0.7rem;
      left: 1.8rem;
      color: #ffffff;
      font-size: 18px;
      @include ellipsis;
    }
    p {
      color: #ffffff;
      font-size: 14px;
      @include ellipsis(2);
    }
  }
  &/deep/ul > li:first-child .pet-box {
    background-color: $app-bg-color-base;
  }
}
</style>
