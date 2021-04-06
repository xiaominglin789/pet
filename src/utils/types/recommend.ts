/** 评论列表模型类型 */
export type RecommendListType = {
  list: Array<RecommendType>
  type: number
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
