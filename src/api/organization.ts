import {
  OrganizationType,
  OrganizationDetailType,
  OrganizationPetsType,
  OrganizationsInforType,
} from '@/utils/types/organization'
import { RecommendListType } from '@/utils/types/recommend'
import { get, post } from '../utils/http/http'

/**
 * 分页获取领养机构列表
 * @param start 开始位置
 * @param limit 一次返回几条
 * @returns
 */
export const getOrganizations = (start: number, limit: number) => {
  // return get<OrganizationsInforType>(`/organizations?start=${start}&limit=${limit}`)
  const res: OrganizationsInforType = {
    list: [
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
    ],
    total: 5,
    limit,
    start,
  }
  return Promise.resolve(res)
}

/**
 * 根据id获取机构详情
 * @param id
 * @returns
 */
export const getOrganizationDetailById = (id: number) => {
  // return get<OrganizationDetailType>('/organzitions/' + id)
  const res: OrganizationDetailType = {
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

/**
 * 获取机构的待领宠物信息
 * @param id 机构id
 * @returns
 */
export const getOrganizationBeforePets = (id: number) => {
  // return post<OrganizationPetsType>('/organzitions/pets', { organizationId: id, type: 'before' })
  const res: OrganizationPetsType = {
    id: id,
    pets: [
      {
        id: 1,
        name: '菲菲',
        age: '1岁零2个月',
        sex: 0,
        entryImg: 'https://picsum.photos/48/48?random=1',
        description: '它不是猫,它是颗土豆!',
      },
      {
        id: 2,
        name: '小可乐',
        age: '1岁零2个月',
        sex: 1,
        entryImg: 'https://picsum.photos/48/48?random=2',
        description: '它不是猫,它是颗土豆!',
      },
      {
        id: 3,
        name: '土豆',
        age: '1岁零2个月',
        sex: 1,
        entryImg: 'https://picsum.photos/48/48?random=3',
        description: '它不是猫,它是颗土豆!',
      },
      {
        id: 4,
        name: '咖啡',
        age: '1岁零2个月',
        sex: 0,
        entryImg: 'https://picsum.photos/48/48?random=4',
        description: '它不是猫,它是颗土豆!',
      },
    ],
    total: 4,
  }
  return Promise.resolve(res)
}

/**
 * 获取机构的已被领养的宠物信息
 * @param id 机构id
 * @returns
 */
export const getOrganizationAfterPets = (id: number) => {
  // return post<OrganizationPetsType>('/organzitions/pets', { organizationId: id, type: 'after' })
  const res: OrganizationPetsType = {
    id: id,
    total: 4,
    pets: [
      {
        id: 1,
        name: '菲菲',
        age: '1岁零2个月',
        sex: 0,
        entryImg: 'https://picsum.photos/48/48?random=1',
        description: '它不是猫,它是颗土豆!',
      },
      {
        id: 2,
        name: '小可乐',
        age: '1岁零2个月',
        sex: 1,
        entryImg: 'https://picsum.photos/48/48?random=2',
        description: '它不是猫,它是颗土豆!',
      },
      {
        id: 3,
        name: '土豆',
        age: '1岁零2个月',
        sex: 1,
        entryImg: 'https://picsum.photos/48/48?random=3',
        description: '它不是猫,它是颗土豆!',
      },
      {
        id: 4,
        name: '咖啡',
        age: '1岁零2个月',
        sex: 0,
        entryImg: 'https://picsum.photos/48/48?random=4',
        description: '它不是猫,它是颗土豆!',
      },
    ],
  }
  return Promise.resolve(res)
}

/**
 * 分页获取机构的评论数据
 * @param id
 * @param start
 * @param limit
 * @param type  2 机构
 * @returns
 */
export const getOrganizationRecommendInfo = (
  id: number,
  start: number,
  limit: number,
  type = 2,
) => {
  // const recommend = post<RecommendListType>('/organzitions/recommend', { id, start, limit, type })
  const res: RecommendListType = {
    list: [
      {
        id: 1,
        name: '屠夫001',
        img: 'https://picsum.photos/48/48?random=1',
        content: '阿猫阿狗屠宰场...',
        date: '2021-03-10',
      },
      {
        id: 2,
        name: '屠夫002',
        img: 'https://picsum.photos/48/48?random=2',
        content: '阿猫阿狗屠宰场...',
        date: '2021-03-10',
      },
      {
        id: 3,
        name: '屠夫003',
        img: 'https://picsum.photos/48/48?random=3',
        content: '阿猫阿狗屠宰场...',
        date: '2021-03-10',
      },
      {
        id: 4,
        name: '屠夫004',
        img: 'https://picsum.photos/48/48?random=4',
        content: '阿猫阿狗屠宰场...',
        date: '2021-03-10',
      },
      {
        id: 5,
        name: '屠夫005',
        img: 'https://picsum.photos/48/48?random=5',
        content: '阿猫阿狗屠宰场...',
        date: '2021-03-10',
      },
    ],
    total: 5,
    type: 2,
  }
  return Promise.resolve(res)
}
