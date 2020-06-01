import { 
	GET_ALL_TEAMS, 
	GET_ALL_TEAMS_ERROR, 
	DELETE_TEAM_BY_ID_ERROR,
	ADD_PLAYER_TO_TEAM,
	ADD_PLAYER_TO_TEAM_ERROR,
	GET_USER_TEAMS,
	GET_USER_TEAMS_ERROR,
} from "../types";
import axios from 'axios';
import _ from "lodash";

export const getAllTeams = () => async dispatch => {
	try {
		const { data } = await axios.get('/api/team/', { headers: {'authorization': localStorage.getItem('token')}});
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({type: GET_ALL_TEAMS_ERROR,	payload: e });
	}
}

export const getCurrentTeam = () => async (dispatch, getState) => {
		const {currentTeam} = getState();
		try{
			dispatch({type: ADD_PLAYER_TO_TEAM,	payload: currentTeam.currentTeam });
	} catch (e) {
		dispatch({type: ADD_PLAYER_TO_TEAM_ERROR,	payload: e });
	}
}

export const addTeam = () => async (dispatch, getState) => {
	const {currentTeam} = getState();
	const team = currentTeam.currentTeam;
	const fantasyPoints = _.sumBy(team, "fantasyPoints");
	try {
		console.log("Front ")
		const data = await axios.post("/api/team/", { team, fantasyPoints}, { headers: {'authorization': localStorage.getItem('token')}});
		console.log(data.data)
		localStorage.setItem('token', data.token);
		dispatch({ type: GET_ALL_TEAMS, payload: data.data}, {type: ADD_PLAYER_TO_TEAM, payload: [] });
		console.log("HIT")
		// this.props.history.push("/");
	} catch (e) {
		console.log(e)
		dispatch({type: ADD_PLAYER_TO_TEAM_ERROR,	payload: e });
	}
};

export const addPlayer = (player) => (dispatch, getState) => {
	const {currentTeam} = getState();
	const data = JSON.stringify(currentTeam);
	if (!data.includes(player.Name)) {
		dispatch({type: ADD_PLAYER_TO_TEAM,	payload: [...currentTeam.currentTeam, player]});
	}
	return;
};

export const getUserTeams = () => async dispatch => {
	console.log('m')
	try {
		const { data } = await axios.get('/api/user/todos', { headers: {'authorization': localStorage.getItem('token')}})
		dispatch( {type: GET_USER_TEAMS, payload: data });
	} catch (e) {
		dispatch({ type: GET_USER_TEAMS_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again'})
	}
}

export const deleteTeam = id => async dispatch => {
	try {
		await axios.delete(`/api/team/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
		const { data } = await axios.get('/api/team/', { headers: {'authorization': localStorage.getItem('token')}});
		console.log(data)
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({ type: DELETE_TEAM_BY_ID_ERROR, payload: e });
	}
}
