import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import playerReducer from './playerReducer';
import teamReducer from './teamReducer';
import authReducer from './authReducer';
import currentTeam from './currentTeamReducer'

export default combineReducers({
  auth: authReducer,
  playerStats: playerReducer,
  teams: teamReducer,
  currentTeam: currentTeam,
  userTeams: teamReducer,
  form: formReducer,
});
