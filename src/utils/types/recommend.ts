/** 评论列表模型类型 */
export type RecommendListType = {
  type: number
  list: Array<RecommendType>
  start: number
  limit: number
  total: number
}

/** 评论模型类型 */
export type RecommendType = {
  id: number
  name: string
  img: string
  date: string
  content: string
}
