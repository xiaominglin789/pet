/** 宠物简介 */
export type PetSimpleInformation = {
  id: number
  name: string
  age: string
  sex: number
  entryImg: string
  description: string
}

/** 宠物详情 */
export type PetInformation = {
  id: number
  name: string
  age: string
  sex: number
  entryImg: string
  variety?: string
  tag?: []
  description?: string
  source?: string
  demand?: string
  birthday?: string
  imgs?: []
  oldMaster?: {
    icon: string
    name: string
  }
}
