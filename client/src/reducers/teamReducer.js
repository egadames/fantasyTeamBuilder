import { 
	GET_ALL_TEAMS, 
	GET_ALL_TEAMS_ERROR, 
	DELETE_TEAM_BY_ID_ERROR,
	ADD_PLAYER_TO_TEAM,
	// ADD_PLAYER_TO_TEAM_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
	teams: [],
};
export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_ALL_TEAMS:
			return {...state, teams: action.payload, GET_ALL_TEAMS_ERROR: ''};
		case GET_ALL_TEAMS_ERROR:
			return {...state, GET_ALL_TEAMS_ERROR: action.payload };
		case DELETE_TEAM_BY_ID_ERROR:
				return {...state, DELETE_TEAM_BY_ID_ERROR: action.payload };

		default:
			return state;
	}
}
