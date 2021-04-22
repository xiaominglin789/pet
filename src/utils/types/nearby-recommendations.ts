/** 附近推荐的店铺信息列表 */
export type NearbyRecommendationListInfo = {
  list: Array<NearbyRecommendationInfo>
  address: string
  total: number
  start: number
  limit: number
}

/** 店铺概要信息模型 */
export type NearbyRecommendationInfo = {
  id: number
  name: string
  entryImg: string
  tags: string[]
  location: string
  totalRecommend: number
}
