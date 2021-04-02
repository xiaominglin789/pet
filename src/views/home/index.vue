<template>
  <div class="page home">
    <!-- 头部栏 -->
    <com-top-bar>
      <template v-slot:left>
        <span class="title">首页</span>
      </template>
      <template v-slot:right>
        <div class="location-box" @click="onLocation">
          <i class="iconfont icon-location"></i>
          <span class="location" v-show="location">{{ location }}</span>
        </div>
      </template>
    </com-top-bar>
    <!-- swiper -->
    <van-swipe
      class="banner-box"
      :autoplay="5000"
      :duration="1500"
      indicator-color="white"
      lazy-render
      ref="homeTopSwipe"
    >
      <van-swipe-item
        v-for="(item, index) in swipeData"
        :key="index"
        @click="onSwiperItem(item)"
      >
        <div class="banner-item">
          <img :src="item.img" />
        </div>
      </van-swipe-item>
    </van-swipe>

    <!-- 测试 -->
    <div style="padding: 20px; display: flex; justify-content: space-between">
      <!-- <button @click="onShowOrganList">去往 /test 路由</button> -->
      <router-link to="/test">去往 /test 路由</router-link>
      <router-link to="/list/test">去往 /list/test 路由</router-link>
    </div>

    <!-- 领养机构 -->
    <core-panel
      title="领养机构"
      :show-more="true"
      more-text="共20家"
      more-icon="icon-right"
      :showTextDecoration="true"
      @onMore="null"
    >
      <core-slider
        className="organization-container"
        :list="testOrgoins.slice(0, 5)"
      >
        <template v-slot:item="{ item }">
          <com-organization className="organization-box" :record="item" />
        </template>
      </core-slider>
    </core-panel>

    <!-- 寄养中心 -->
    <core-panel title="寄养中心">
      <div class="adoption-center-container">
        <div
          class="adoption-center-box"
          v-for="(item, index) in testAdoptionCenters"
          :key="index"
          @click="onAdoptionCenter(item.name)"
        >
          <van-image fit="contain" :src="item.entryImg" />
        </div>
      </div>
    </core-panel>

    <!-- 萌宠明星 -->
    <core-panel title="萌宠明星">
      <van-list class="star-pet-container">
        <div
          class="star-pet-box"
          v-for="(pet, index) in testHotListPets"
          :key="index"
        >
          <com-list-pet :record="pet"></com-list-pet>
        </div>
      </van-list>
    </core-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ComTopBar from '@/components/com-topbar.vue'
import CorePanel from '@/components/core/core-panel.vue'
import ComOrganization from '@/components/com-organization.vue'
import CoreSlider from '@/components/core/core-slider.vue'
import ComListPet from '@/components/com-list-pet.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    ComTopBar,
    CorePanel,
    ComOrganization,
    CoreSlider,
    ComListPet,
  },
  data: () => {
    return {
      location: '朝阳区',
      swipeData: [
        {
          id: 1,
          title: '家',
          name: 'pet home',
          description: '',
          img: 'https://picsum.photos/375/136?random=1',
        },
        {
          id: 2,
          title: '有',
          name: 'pet game',
          description: '',
          img: 'https://picsum.photos/375/136?random=2',
        },
        {
          id: 3,
          title: '萌',
          name: 'pet friend',
          description: '',
          img: 'https://picsum.photos/375/136?random=4',
        },
        {
          id: 4,
          title: '猫',
          name: 'pet release',
          description: '',
          img: 'https://picsum.photos/375/136?random=4',
        },
      ],
      starPitList: [],
      testOrgoins: [
        {
          id: 1,
          title: '爱助宠物之家',
          remark: '带领养20只',
          scope: 9,
          address: '中山路',
          logoImg: 'https://picsum.photos/64/64?random=20',
          entryImg: 'https://picsum.photos/150/100?random=30',
        },
        {
          id: 2,
          title: '爱助宠物之家',
          remark: '带领养20只',
          scope: 8,
          address: '中山路',
          logoImg: 'https://picsum.photos/64/64?random=21',
          entryImg: 'https://picsum.photos/150/100?random=31',
        },
        {
          id: 3,
          title: '爱助宠物之家',
          remark: '带领养20只',
          scope: 10,
          address: '中山路',
          logoImg: 'https://picsum.photos/64/64?random=22',
          entryImg: 'https://picsum.photos/150/100?random=32',
        },
      ],
      testAdoptionCenters: [
        {
          id: 1,
          title: '机构',
          name: 'organ',
          entryImg: 'https://picsum.photos/375/240?random=31',
          remark: 'ORGANIZATION',
        },
        {
          id: 2,
          title: '个人',
          name: 'person',
          entryImg: 'https://picsum.photos/375/240?random=32',
          remark: 'INDIVIDUAL',
        },
      ],
      testHotListPets: [
        {
          id: 11,
          name: '土豆1',
          rankType: 1,
          remark: '活跃之星',
          age: '1岁零2个月',
          sex: 0,
          img: 'https://picsum.photos/48/48?random=36',
          description: '它不是猫,它是颗土豆!',
        },
        {
          id: 122,
          name: '土豆2',
          rankType: 2,
          remark: '人气王',
          age: '1岁零2个月',
          sex: 1,
          img: 'https://picsum.photos/48/48?random=37',
          description: '它不是猫,它是颗土豆!',
        },
        {
          id: 515,
          name: '土豆3',
          rankType: 6,
          remark: '魅力王者',
          age: '1岁零2个月',
          sex: 0,
          img: 'https://picsum.photos/48/48?random=38',
          description: '它不是猫,它是颗土豆!',
        },
        {
          id: 516,
          name: '土豆4',
          rankType: 6,
          remark: '魅力王者',
          age: '1岁零2个月',
          sex: 0,
          img: 'https://picsum.photos/48/48?random=38',
          description: '它不是猫,它是颗土豆!',
        },
        {
          id: 517,
          name: '土豆5',
          rankType: 6,
          remark: '魅力王者',
          age: '1岁零2个月',
          sex: 0,
          img: 'https://picsum.photos/48/48?random=38',
          description: '它不是猫,它是颗土豆!',
        },
      ],
    }
  },
  setup() {
    const router = useRouter()
    const homeTopSwipe = ref(null)

    const onLocation = () => {
      console.log('切换位置')
    }
    const onAdoptionCenter = (name: string) => {
      console.log('准备打开的中心入口：', name)
    }
    const onSwiperItem = (item: any) => {
      console.log(item)
    }

    // test
    const onShowOrganizations = () => {
      console.log('查看机构列表')
      router.push({ path: '/list/test' })
    }
    const onShowOrganList = () => {
      router.push({ path: '/test' })
    }

    onMounted(() => {
      console.log(homeTopSwipe.value)
    })

    return {
      homeTopSwipe,
      onLocation,
      onAdoptionCenter,
      onSwiperItem,
      onShowOrganizations,
      onShowOrganList,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px 100px 10px;
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .location-box {
    box-sizing: border-box;
    padding: 6px;
    .location {
      text-align: right;
      margin-left: 6px;
      font-size: 14px;
    }
  }
  .banner-box {
    width: 100%;
    padding-top: 16px;
    .banner-item {
      margin: 0 4px;
      img {
        border-radius: 16px;
        width: 100%;
      }
    }
    /deep/.van-swipe__indicators {
      left: 90% !important;
    }
  }
  .organization-container {
    box-sizing: border-box;
    .organization-box {
      position: relative;
      box-sizing: border-box;
      margin-right: 10px;
      padding: 20px 10px;
      box-shadow: 0px 0 5px 1px #eee;
    }
    /deep/ li {
      margin: 2px;
    }
    /deep/ li:last-child .organization-box {
      margin-right: 0 !important;
    }
  }
  .adoption-center-container {
    display: flex;
    justify-content: space-between;
    .adoption-center-box {
      position: relative;
      width: 1;
      margin-right: 7px;
      /deep/img {
        border-radius: 4px;
      }
    }
    & .adoption-center-box:last-child {
      margin-right: 0 !important;
    }
  }
  .star-pet-container .star-pet-box:nth-child(1) {
    /deep/ .info-remark {
      background-color: #f87394;
    }
  }
  .star-pet-container .star-pet-box:nth-child(2) {
    /deep/ .info-remark {
      background-color: #de6df5;
    }
  }
  .star-pet-container .star-pet-box:nth-child(3) {
    /deep/ .info-remark {
      background-color: #4cbbfc;
    }
  }
}
</style>
