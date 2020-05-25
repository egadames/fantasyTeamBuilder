import {GET_ALL_PLAYER_STATS, GET_ALL_PLAYER_STATS_ERROR} from "../types";
import axios from 'axios';

import playerStats from '../../Data/Player/playerStats.json'

export const getAllPlayerStats = () => async dispatch => {
	try {
		console.log(playerStats);
		const { data } = await axios.get('/api/player/test');
		dispatch({type: GET_ALL_PLAYER_STATS,payload: data});
	} catch (e) {
		dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
	}
}

