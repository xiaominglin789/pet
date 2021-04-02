import { Module } from 'vuex'
import { IRootState } from '..'

/** 菜单state数据结构 */
export interface IMenuState {
  menuActivePath: string
  showMenu: boolean
}

const menu: Module<IMenuState, IRootState> = {
  namespaced: true,
  state: {
    menuActivePath: '/',
    showMenu: true,
  },
  mutations: {
    SET_MENU_ACTIVE_PATH(state: IMenuState, value: string) {
      state.menuActivePath = value
    },
    SET_SHOW_MENU(state: IMenuState, value: boolean) {
      state.showMenu = value
    },
  },
  actions: {
    async setMenuActivePath({ commit }, value: string) {
      commit('SET_MENU_ACTIVE_PATH', value)
    },
    async setShowMenu({ commit }, value: boolean) {
      commit('SET_SHOW_MENU', value)
    },
  },
}

export default menu
