import { createStore } from 'vuex'
import menu, { IMenuState } from './modules/menu'

/** 基础state结构 */
export interface IRootState {
  menu: IMenuState
}

export default createStore<IRootState>({
  mutations: {},
  actions: {},
  modules: {
    menu,
  },
})
