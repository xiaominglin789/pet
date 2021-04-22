import { getNearbyRecommendations } from '@/api/service'
import {
  NearbyRecommendationInfo,
  NearbyRecommendationListInfo,
} from '@/utils/types/nearby-recommendations'
import { reactive } from '@vue/reactivity'
import { toRefs } from 'vue'

/**
 * 附近推荐-
 * @param address 位置信息, 默认 北京
 */
const useHttpNearbyRecommendation = (address?: string) => {
  /** 默认取3条数据 */
  const MIN_LIMIT = 3
  const state = reactive({
    address: '',
    list: Array<NearbyRecommendationInfo>(),
    total: 0,
    start: 0,
    limit: 0,
    isEnd: false,
  })
  state.address = address?.trim() || '北京'

  /** 重置配置信息 */
  const reset = () => {
    state.list = Array<NearbyRecommendationInfo>()
    state.address = ''
    state.total = 0
    state.start = 0
    state.limit = 0
    state.isEnd = false
  }

  /**
   * 分页获取数据
   * @param start 从第几条开始
   * @param limit 取多少条, 可选, 默认
   */
  const getNext = async (start: number, limit?: number) => {
    if (state.isEnd) return
    if (start < 0) return
    if (!limit || limit < MIN_LIMIT) {
      limit = MIN_LIMIT
    }

    console.log(
      'total:',
      state.total,
      ' start:',
      state.start,
      ' limit:',
      state.limit,
    )
    const result: NearbyRecommendationListInfo = await getNearbyRecommendations(
      start,
      limit,
      address,
    )

    // 没请求到数据
    if (result.total <= 0) return

    state.list.push(...result.list)
    state.start = state.list.length
    state.total = result.total
    state.address = result.address
    state.limit = result.limit

    if (state.start === state.total) {
      state.isEnd = true
    }
  }

  return {
    ...toRefs(state),
    getNext,
    reset,
  }
}

export { useHttpNearbyRecommendation }
