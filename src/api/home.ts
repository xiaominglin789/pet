import { OranizationType } from '@/utils/types/organization'
import { get, post } from '../utils/http/http'

/**
 * 分页获取领养机构列表
 * @param start 开始位置
 * @param limit 一次返回几条
 * @returns
 */
export const getOrganizations = (start: number, limit: number) => {
  // return get<Array<OranizationType>>(`/organizations?start=${start}&limit=${limit}`)
  const data: Array<OranizationType> = [
    {
      id: 1,
      title: '爱助宠物之家',
      remark: '带领养20只',
      scope: 9,
      address: '中山路',
      subscribe: false,
      logoImg: 'https://picsum.photos/64/64?random=20',
      entryImg: 'https://picsum.photos/150/100?random=30',
    },
    {
      id: 2,
      title: '爱助宠物之家',
      remark: '带领养20只',
      scope: 8,
      address: '中山路',
      subscribe: true,
      logoImg: 'https://picsum.photos/64/64?random=21',
      entryImg: 'https://picsum.photos/150/100?random=31',
    },
    {
      id: 3,
      title: '爱助宠物之家',
      remark: '带领养20只',
      scope: 10,
      address: '中山路',
      subscribe: false,
      logoImg: 'https://picsum.photos/64/64?random=22',
      entryImg: 'https://picsum.photos/150/100?random=32',
    },
  ]
  return Promise.resolve(data)
}
