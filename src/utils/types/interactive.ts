/** 达人互动列表信息 */
export type InteractiveListInfo = {
  list: Array<InteractiveTrendsInfo>
  start: number
  limit: number
  total: number
}

/** 达人互动列表-达人动态信息模型 */
export type InteractiveTrendsInfo = {
  id: number
  icon: string
  name: string
  address: string
  content: string
  imgs: Array<string>
  publishDate: string
  favorTotal: number
  commentTotal: number
}
