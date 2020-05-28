import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import counterReducer from './counterReducer';
import createReducer from './createReducer';
import authReducer from './authReducer';

// import { ADD_USER_TODO } from '../actions/types';

export default combineReducers({
  auth: authReducer,
  playerStats: createReducer,
  teams: createReducer,
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
