import { 
	GET_ALL_TEAMS, 
	GET_ALL_TEAMS_ERROR, 
	DELETE_TEAM_BY_ID_ERROR,
	ADD_PLAYER_TO_TEAM,
	ADD_PLAYER_TO_TEAM_ERROR,
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
			dispatch({type: ADD_PLAYER_TO_TEAM,	payload: currentTeam });
	} catch (e) {
		dispatch({type: GET_ALL_TEAMS_ERROR,	payload: e });
	}
}

export const addTeam = () => async (dispatch, getState) => {
	console.log('im git')
	console.log(dispatch)
	console.log(getState())

	// // const {playerStats} = getState();
	// const {currentTeam} = getState();
	// const team = currentTeam;
	// const points = _.sumBy(team, "fantasyPoints");
	// try {
	// 	const { data } = await axios.post("/api/team/", { team, points, headers: {'authorization': localStorage.getItem('token')}});
	// 	localStorage.setItem('token', data.token);
	// 	dispatch({ type: GET_ALL_TEAMS, payload: data}, {type: ADD_PLAYER_TO_TEAM, payload: [] });
	// 	this.props.history.push("/");
	// } catch (e) {
	// 	dispatch({type: ADD_PLAYER_TO_TEAM_ERROR,	payload: e });
	// }
};

export const addPlayer = (player) => (dispatch, getState) => {
	const {currentTeam} = getState();
	// let shit = currentTeam.map((shit) => {
	// 	return shit;
	// })
	console.log(currentTeam.currentTeam)
	const data = JSON.stringify(currentTeam);
	if (!data.includes(player.Name)) {
		dispatch({type: ADD_PLAYER_TO_TEAM,	payload: player });
	}
	return;
};

// export const getUserTodos = () => async dispatch => {
// 	try {
// 		const { data } = await axios.get('/api/user/todos', { headers: {'authorization': localStorage.getItem('token')}})
// 		dispatch( {type: GET_USER_TODOS, payload: data });
// 	} catch (e) {
// 		dispatch({ type: GET_USER_TODOS_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again'})
// 	}
// }

export const deleteTeam = id => async dispatch => {
	try {
		await axios.delete(`/api/team/${id}`);
		const { data } = await axios.get('/api/team/', { headers: {'authorization': localStorage.getItem('token')}});
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({ type: DELETE_TEAM_BY_ID_ERROR, payload: e });
	}
}
