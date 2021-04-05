/** 机构数据类型一 */
export type OranizationType = {
  id: number
  title: string
  remark: string
  scope: number
  totalScope: number
  address: string
  logoImg: string
  entryImg?: string
}

/** 机构数据类型二 */
export type OranizationDetailType = {
  id: number
  title: string
  remark: string
  description: string
  scope: number
  totalScope: number
  address: string
  logoImg: string
  entryImg?: string
}
