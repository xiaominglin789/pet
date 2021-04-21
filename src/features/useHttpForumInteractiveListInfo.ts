import {
  InteractiveListInfo,
  InteractiveTrendsInfo,
} from '@/utils/types/interactive'
import { readonly, ref, toRefs } from 'vue'
import { getForumInteractiveListInfo } from '@/api/forum'

/** 达人互动网咯数据 */
export const useHttpForumInteractiveListInfo = () => {
  const MIN_LIMIT = 4
  const list = ref(Array<InteractiveTrendsInfo>())
  const start = ref(0)
  const limit = ref(0)
  const total = ref(0)
  const isEnd = ref(false)

  /**
   * 重置请求数据记录
   */
  const reset = () => {
    list.value = []
    start.value = 0
    limit.value = 0
    total.value = 0
    isEnd.value = false
    console.log('请求配置已重置...')
  }

  /**
   * 请求下一组数据,需要手动调用
   * @param _start 起始位
   * @param _limit 每次限定的条数, 最小为:5
   * @returns
   */
  const getNext = async (_start: number, _limit?: number) => {
    if (isEnd.value) return
    if (_start < 0) return
    if (!_limit || _limit < MIN_LIMIT) {
      _limit = MIN_LIMIT
    }

    const result: InteractiveListInfo = await getForumInteractiveListInfo(
      _start,
      _limit,
    )

    console.log('数据请求-------------------------')

    if (result.total <= 0) return

    list.value.push(...result.list)
    start.value = list.value.length
    total.value = result.total
    limit.value = result.limit

    if (total.value === start.value) {
      isEnd.value = true
      console.log('end: ', isEnd.value)
    }
  }

  return {
    ...toRefs(
      readonly({
        list,
        start,
        limit,
        total,
        isEnd,
      }),
    ),
    getNext,
    reset,
  }
}
