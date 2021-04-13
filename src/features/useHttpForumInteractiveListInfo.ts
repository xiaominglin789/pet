import {
  InteractiveListInfo,
  InteractiveTrendsInfo,
} from '@/utils/types/interactive'
import { readonly, ref, toRefs } from 'vue'
import { getForumInteractiveListInfo } from '@/api/forum'

/** 达人互动网咯数据 */
export const useHttpForumInteractiveListInfo = () => {
  const MIN_LIMIT = 5
  const list = ref(Array<InteractiveTrendsInfo>())
  const start = ref(0)
  const limit = ref(0)
  const total = ref(0)
  const isEnd = ref(false)

  /**
   * 请求下一组数据,需要手动调用
   * @param _start 起始位
   * @param _limit 每次限定的条数, 最小为:5
   * @returns
   */
  const getNext = async (_start: number, _limit: number) => {
    if (isEnd.value) return
    if (_start < 0) return
    if (_limit < MIN_LIMIT) {
      _limit = MIN_LIMIT
    }

    const result: InteractiveListInfo = await getForumInteractiveListInfo(
      _start,
      _limit,
    )

    // 1.xxx
    console.log('1.xxx = ', result)

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
  }
}
