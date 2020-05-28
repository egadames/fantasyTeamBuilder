import { GET_ALL_PLAYER_STATS, GET_ALL_PLAYER_STATS_ERROR, GET_ALL_TEAMS, GET_ALL_TEAMS_ERROR} from '../actions/types';

const INITIAL_STATE = {
	playerStats: [],
	teams: [],
	GET_ALL_PLAYER_STATS_ERROR: '',
	direction: 'asc'
};
export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_ALL_PLAYER_STATS:
			return {...state, playerStats: action.payload, GET_ALL_PLAYER_STATS_ERROR: '', direction: action.direction };
		case GET_ALL_PLAYER_STATS_ERROR:
			return {...state, GET_ALL_PLAYER_STATS_ERROR: action.payload };
		case GET_ALL_TEAMS:
			return {...state, teams: action.payload, GET_ALL_TEAMS_ERROR: ''};
		case GET_ALL_TEAMS_ERROR:
			return {...state, GET_ALL_TEAMS_ERROR: action.payload };
		default:
			return state;
	}
}
