import { get, post } from '@/utils/http/http'
import {
  NearbyRecommendationListInfo,
  NearbyRecommendationInfo,
} from '@/utils/types/nearby-recommendations'

/**
 *  获取最近最近的数据
 * @param start
 * @param limit
 * @param address 地址, 默认值 北京。位置信息(坐标值？)
 */
export const getNearbyRecommendations = (
  start: number,
  limit: number,
  address = '北京',
) => {
  // return post<NearbyRecommendationListInfo>('/nearby-recommendations', { start, limit, address})
  const allNearbyRecommendationInfos: Array<NearbyRecommendationInfo> = [
    {
      id: 1,
      name: '宠爱家生活馆',
      entryImg: 'https://picsum.photos/100/64?random=50',
      tags: ['药物销售', '日常护理', '洗澡美容'],
      location: '天南公园南门对面1500米',
      totalRecommend: 128,
    },
    {
      id: 2,
      name: '轻奢喵舍',
      entryImg: 'https://picsum.photos/100/64?random=51',
      tags: ['人性训练', '沐浴美容', '餐饮搭配'],
      location: '人民路168号铺',
      totalRecommend: 168,
    },
    {
      id: 3,
      name: '宠爱家生活馆2',
      entryImg: 'https://picsum.photos/100/64?random=52',
      tags: ['药物销售', '日常护理', '洗澡美容'],
      location: '天南公园南门对面1500米',
      totalRecommend: 58,
    },
    {
      id: 4,
      name: '宠爱家生活馆4',
      entryImg: 'https://picsum.photos/100/64?random=50',
      tags: ['药物销售', '日常护理', '洗澡美容'],
      location: '天南公园南门对面1500米',
      totalRecommend: 128,
    },
    {
      id: 5,
      name: '轻奢喵舍5',
      entryImg: 'https://picsum.photos/100/64?random=51',
      tags: ['人性训练', '沐浴美容', '餐饮搭配'],
      location: '人民路168号铺',
      totalRecommend: 168,
    },
    {
      id: 6,
      name: '宠爱家生活馆6',
      entryImg: 'https://picsum.photos/100/64?random=52',
      tags: ['药物销售', '日常护理', '洗澡美容'],
      location: '天南公园南门对面1500米',
      totalRecommend: 58,
    },
    {
      id: 7,
      name: '宠爱家生活馆6',
      entryImg: 'https://picsum.photos/100/64?random=52',
      tags: ['药物销售', '日常护理', '洗澡美容'],
      location: '天南公园南门对面1500米',
      totalRecommend: 78,
    },
  ]

  const data: NearbyRecommendationListInfo = {
    list: allNearbyRecommendationInfos.slice(start, start + limit),
    address,
    total: allNearbyRecommendationInfos.length,
    start,
    limit,
  }

  return Promise.resolve(data)
}
