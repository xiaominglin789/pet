import { Module } from 'vuex'
import { IRootState } from '..'

/** 菜单state数据结构 */
export interface IMenuState {
  menuActive: number
  showMenu: boolean
}

const menu: Module<IMenuState, IRootState> = {
  namespaced: true,
  state: {
    menuActive: 0,
    showMenu: true,
  },
  mutations: {
    SET_MENU_ACTIVE(state: IMenuState, value: number) {
      state.menuActive = value
    },
    SET_SHOW_MENU(state: IMenuState, value: boolean) {
      state.showMenu = value
    },
  },
  actions: {
    async setMenuActive({ commit }, value: number) {
      commit('SET_MENU_ACTIVE', value)
    },
    async setShowMenu({ commit }, value: boolean) {
      commit('SET_SHOW_MENU', value)
    },
  },
}

export default menu
