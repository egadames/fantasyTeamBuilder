import { 
	GET_ALL_TEAMS, 
	GET_ALL_TEAMS_ERROR, 
	DELETE_TEAM_BY_ID_ERROR
} from "../types";
import axios from 'axios';

export const getAllTeams = () => async dispatch => {
	try {
		const { data } = await axios.get('/api/team/');
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({type: GET_ALL_TEAMS_ERROR,	payload: e });
	}
}

export const deleteTeam = id => async dispatch => {
	try {
		await axios.delete(`/api/team/${id}`);
		const { data } = await axios.get('/api/team/');
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({ type: DELETE_TEAM_BY_ID_ERROR, payload: e });
	}
}
