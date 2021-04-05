import {
  OranizationType,
  OranizationDetailType,
} from '@/utils/types/organization'
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
      title: '爱助宠物之家1',
      remark: '带领养20只',
      scope: 9,
      totalScope: 10,
      address: '中山路',
      logoImg: 'https://picsum.photos/64/64?random=20',
      entryImg: 'https://picsum.photos/375/240?random=31',
    },
    {
      id: 2,
      title: '爱助宠物之家2',
      remark: '带领养20只',
      scope: 8,
      totalScope: 10,
      address: '中山路',
      logoImg: 'https://picsum.photos/64/64?random=21',
      entryImg: 'https://picsum.photos/375/240?random=32',
    },
    {
      id: 3,
      title: '爱助宠物之家3',
      remark: '带领养20只',
      scope: 10,
      totalScope: 10,
      address: '中山路',
      logoImg: 'https://picsum.photos/64/64?random=22',
      entryImg: 'https://picsum.photos/375/240?random=33',
    },
    {
      id: 4,
      title: '爱助宠物之家4',
      remark: '带领养20只',
      scope: 7,
      totalScope: 10,
      address: '中山路',
      logoImg: 'https://picsum.photos/64/64?random=22',
      entryImg: 'https://picsum.photos/375/240?random=34',
    },
    {
      id: 5,
      title: '爱助宠物之家5',
      remark: '带领养20只',
      scope: 7,
      totalScope: 10,
      address: '中山路',
      logoImg: 'https://picsum.photos/64/64?random=22',
      entryImg: 'https://picsum.photos/375/240?random=35',
    },
  ]
  return Promise.resolve(data)
}

/**
 * 根据id获取机构详情
 * @param id
 * @returns
 */
export const getOrganizationDetailById = (id: number) => {
  // return get<OranizationDetailType>('/organzitions/' + id)
  const res: OranizationDetailType = {
    id: 1,
    title: '萌七岁救助站',
    remark: '带领养20只',
    description:
      '萌七岁救助站, 是一家帮助无家可归的爱宠找到新主人的机构,你可以来这里预约领养; 也可以发布领养消息,帮你爱宠找到新主人。我们致力于为爱宠服务',
    scope: 9,
    totalScope: 10,
    address: '朝阳区 三里屯羽弥西里底商1010室',
    logoImg: 'https://picsum.photos/64/64?random=20',
    entryImg: 'https://picsum.photos/375/240?random=31',
  }
  return Promise.resolve(res)
}
