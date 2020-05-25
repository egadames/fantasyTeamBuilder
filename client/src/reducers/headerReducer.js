import * as actionTypes from '../actions/actionTypes'

const initialState = {
  activeMenu: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.MENU_SWITCH:
      return switchMenu(state, action);
    default:
      return state;
  }
}

function switchMenu(state, action) {
  const { activeMenu } = action;
  return { ...state, activeMenu };
}