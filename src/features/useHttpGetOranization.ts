import { getOrganizations } from '@/api/home'
import { ref } from 'vue'
import { OranizationType } from '@/utils/types/organization'

export const useOranizationHttp = () => {
  const list = ref(Array<OranizationType>())
  const start = ref(0)
  const limit = 10

  const getNext = async () => {
    const result: OranizationType[] = await getOrganizations(start.value, limit)
    console.log(result)
    if (result && result.length > 0) {
      start.value += result.length
      list.value.push(...result)
    }
  }

  return {
    list,
    start,
    limit,
    getNext,
  }
}
