import { readonly, toRefs, ref } from 'vue'
import { getOrganizationRecommendInfo } from '@/api/organization'
import { CommendEnum } from '@/utils/enums/enum'
import { RecommendListType, RecommendType } from '@/utils/types/recommend'

/**
 * 某机构的评论数据
 * @param id 机构id
 * @returns
 */
export const useHttpOrganizationCommends = (id: number) => {
  const MIN_LIMIT = 5
  const list = ref(Array<RecommendType>())
  const start = ref(0)
  const limit = ref(0)
  const total = ref(0)
  const isEnd = ref(false)

  /**
   * 获取下一组数据
   * @param _start 起始位置, 必传
   * @param _limit 每次返回n条,默认-最小值: 5
   * @returns
   */
  const getNext = async (_start: number, _limit?: number) => {
    if (isEnd.value === true) return
    if (_start < 0) return
    if (!_limit || _limit < MIN_LIMIT) {
      _limit = MIN_LIMIT
    }

    const result: RecommendListType = await getOrganizationRecommendInfo(
      id,
      _start,
      _limit,
      CommendEnum.Organiztion,
    )

    if (result.total <= 0) return

    list.value.push(...result.list)
    start.value = list.value.length
    total.value = result.total
    limit.value = result.limit

    if (start.value === total.value) {
      isEnd.value = true
    }
  }

  return {
    ...toRefs(
      readonly({
        list,
        start,
        limit,
        isEnd,
        total,
      }),
    ),
    getNext,
  }
}
