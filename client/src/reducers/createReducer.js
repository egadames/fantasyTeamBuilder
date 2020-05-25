import { GET_ALL_PLAYER_STATS, GET_ALL_PLAYER_STATS_ERROR} from '../actions/types';

const INITIAL_STATE = {
	playerStats: [],
	GET_ALL_PLAYER_STATS_ERROR: '',
};
export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_ALL_PLAYER_STATS:
			return {...state, playerStats: action.payload, GET_ALL_PLAYER_STATS_ERROR: '' };
		case GET_ALL_PLAYER_STATS_ERROR:
			return {...state, GET_ALL_PLAYER_STATS_ERROR: action.payload };
		default:
			return state;
	}
}
