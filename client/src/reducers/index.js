import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import playerReducer from './playerReducer';
import teamReducer from './teamReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  playerStats: playerReducer,
  teams: teamReducer,
  currentTeam: teamReducer,
  form: formReducer,
  // form: formReducer.plugin({
  //   addTodo: (state, action) => {
  //     switch(action.type) {
  //       case ADD_USER_TODO:
  //         return undefined;
  //       default:
  //         return state;
  //     }
  //   }
  // }),
});
