import {GET_ALL_PLAYER_STATS, GET_ALL_PLAYER_STATS_ERROR} from "../types";
import axios from 'axios';

// import playerStats from '../../Data/Player/playerStats.json'

export const getAllPlayerStats = () => async dispatch => {
	try {
		const { data } = await axios.get('/api/player/test');
		dispatch({type: GET_ALL_PLAYER_STATS,payload: data, direction: 'asc' });
	} catch (e) {
		dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
	}
}


export const sortPlayersByName = (direction) => async dispatch => {
	try {
		const { data } = await axios.get('/api/player/test');
		let sortedData;
		if (direction === 'asc') {
			direction = 'des'
			sortedData = data.sort((a,b) => {
				return a.Name.localeCompare(b.Name);
			});
		} else {
			direction = 'asc';
			sortedData = data.sort((a,b) => {
				return a.Name.localeCompare(b.Name)
			}).reverse();
		}
		dispatch({type: GET_ALL_PLAYER_STATS,payload: sortedData, direction});
	} catch (e) {
		dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
	}
}