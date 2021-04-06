import { PetSimpleInformation } from './pet'

/** 机构数据类型一 */
export type OrganizationType = {
  id: number
  title: string
  remark: string
  scope: number
  totalScope: number
  address: string
  logoImg: string
  entryImg?: string
}

/** 机构列表数据类型 */
export type OrganizationsInforType = {
  list: Array<OrganizationType>
  total: number
  start: number
  limit: number
}

/** 机构数据类型二 */
export type OrganizationDetailType = {
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

/** 机构宠物信息 */
export type OrganizationPetsType = {
  id: number
  total: number
  pets: Array<PetSimpleInformation>
}
