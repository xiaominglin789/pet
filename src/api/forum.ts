import {
  InteractiveListInfo,
  InteractiveTrendsInfo,
} from '@/utils/types/interactive'
import { get, post } from '../utils/http/http'

export const getForumInteractiveListInfo = (start: number, limit: number) => {
  // return post<InteractiveListInfo>('/forum/interactive/list', { start, limit })
  const list: Array<InteractiveTrendsInfo> = [
    {
      id: 1,
      icon: 'https://picsum.photos/48/48?random=1',
      name: '高级铲si君',
      address: '九龙城',
      content:
        '阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场阿猫阿狗屠宰场',
      imgs: [
        'https://picsum.photos/48/48?random=1',
        'https://picsum.photos/48/48?random=2',
        'https://picsum.photos/48/48?random=3',
      ],
      publishDate: '2021-04-10',
      favorTotal: 10,
      commentTotal: 20,
    },
    {
      id: 2,
      icon: 'https://picsum.photos/48/48?random=1',
      name: '高级铲si君',
      address: '九龙城',
      content: '...',
      imgs: [
        'https://picsum.photos/48/48?random=1',
        'https://picsum.photos/48/48?random=2',
        'https://picsum.photos/48/48?random=3',
      ],
      publishDate: '2021-04-10',
      favorTotal: 10,
      commentTotal: 20,
    },
    {
      id: 3,
      icon: 'https://picsum.photos/48/48?random=1',
      name: '高级铲si君',
      address: '九龙城',
      content: '...',
      imgs: [
        'https://picsum.photos/48/48?random=1',
        'https://picsum.photos/48/48?random=2',
        'https://picsum.photos/48/48?random=3',
      ],
      publishDate: '2021-04-10',
      favorTotal: 10,
      commentTotal: 20,
    },
  ]

  const res: InteractiveListInfo = {
    list: list.slice(start, start + limit),
    total: list.length,
    start: start,
    limit: limit,
  }
  return Promise.resolve(res)
}
