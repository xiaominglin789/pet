import { getOrganizations } from '@/api/organization'
import { ref } from 'vue'
import {
  OrganizationType,
  OrganizationsInforType,
} from '@/utils/types/organization'

export const useOranizationHttp = () => {
  const list = ref(Array<OrganizationType>())
  const currentStart = ref(-1)
  const currentTotal = ref(0)

  const get = async (start = 0, limit = 10) => {
    if (start <= currentStart.value) return
    const result: OrganizationsInforType = await getOrganizations(start, limit)

    if (result && result.list.length > 0) {
      list.value.push(...result.list)
      currentStart.value = start
      currentTotal.value = result.total
    }
  }

  return {
    list,
    start: () => currentStart.value,
    limit: () => currentTotal.value,
    get,
  }
}
