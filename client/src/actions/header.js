import * as actionTypes from '../actions/actionTypes'
import * as actions from './index'

export function switchMenu(activeMenu) {
  console.log(activeMenu)
  return {
    type: actionTypes.MENU_SWITCH,
    activeMenu
  }
}