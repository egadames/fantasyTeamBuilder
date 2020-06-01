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
import { pl } from "date-fns/locale";

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
		console.log(currentTeam.currentTeam)
		try{
			dispatch({type: ADD_PLAYER_TO_TEAM,	payload: currentTeam.currentTeam });
	} catch (e) {
		dispatch({type: ADD_PLAYER_TO_TEAM_ERROR,	payload: e });
	}
}

export const addTeam = () => async (dispatch, getState) => {
	console.log(getState())
	console.log("Front HIT")

	// const {playerStats} = getState();
	const {currentTeam} = getState();

	// const team = currentTeam.currentTeam;
	const team = [1,2,3];
	const fantasyPoints = _.sumBy(team, "fantasyPoints");
	console.log(fantasyPoints)
	console.log(team)
	console.log({'authorization': localStorage.getItem('token')})

	try {
		console.log("Front HIT")

		const data = await axios.post("/api/team/", { team: team}, {fantasyPoints: fantasyPoints});
		console.log(data)
		// localStorage.setItem('token', data.token);
		// dispatch({ type: GET_ALL_TEAMS, payload: data}, {type: ADD_PLAYER_TO_TEAM, payload: [] });
		console.log("Front HIT")

		this.props.history.push("/");
	} catch (e) {
		console.log(e)
		dispatch({type: ADD_PLAYER_TO_TEAM_ERROR,	payload: e });
	}
};

export const addPlayer = (player) => (dispatch, getState) => {
	const {currentTeam} = getState();

	const data = JSON.stringify(currentTeam);
	// console.log()
	console.log(currentTeam)
	if (!data.includes(player.Name)) {
		console.log(currentTeam)

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
		console.log('im hit')

		const { data } = await axios.get('/api/team/', { headers: {'authorization': localStorage.getItem('token')}});
		console.log(data)
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({ type: DELETE_TEAM_BY_ID_ERROR, payload: e });
	}
}
