import {
	GET_ALL_PLAYER_STATS, 
	GET_ALL_PLAYER_STATS_ERROR, 
	GET_ALL_TEAMS, 
	GET_ALL_TEAMS_ERROR, 
	DELETE_TEAM_BY_ID_ERROR
} from "../types";
import axios from 'axios';
import _ from "lodash";

// import playerStats from '../../Data/Player/playerStats.json'

export const getAllPlayerStats = () => async dispatch => {
	try {
		const { data } = await axios.get('/api/player/test');
		dispatch({type: GET_ALL_PLAYER_STATS,payload: data, direction: 'asc' });
	} catch (e) {
		dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
	}
}

export const getAllTeams = () => async dispatch => {
	try {
		const { data } = await axios.get('/api/team/');
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({type: GET_ALL_TEAMS_ERROR,	payload: e });
	}
}

export const onSubmit = (currentTeam) => async (dispatch) => {
	const data = currentTeam;
	try {
		const { newTeam } = await axios.post("/api/team/", data);
		console.log(newTeam)

		// localStorage.setItem('token', data.token);
		dispatch({ type: GET_ALL_TEAMS, payload: this.props.teams});
		
	} catch (e) {
		console.log(e);
	}
};


export const deleteTeam = id => async dispatch => {
	try {
		await axios.delete(`/api/team/${id}`);
		const { data } = await axios.get('/api/team/');
		dispatch({type: GET_ALL_TEAMS,payload: data});
	} catch (e) {
		dispatch({ type: DELETE_TEAM_BY_ID_ERROR, payload: e });
	}
}
 export const filterData = (searchQuery) => async dispatch => {
	 console.log(searchQuery)
	 try {
		let regex = new RegExp(searchQuery.toLowerCase());
		const { data } = await axios.get('/api/player/test');
		let filteredData =  data.filter(function(player) {
      return !player.Name.toLowerCase().search(regex);
    });
		dispatch({type: GET_ALL_PLAYER_STATS, payload: filteredData, direction: 'asc'});
	} catch (e) {
		dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
	}
}
	
	export const sortPlayers = (direction, column) => async dispatch => {
		try {
			const { data } = await axios.get('/api/player/test');
			let sortedData;
			if (direction === 'asc' && column === 'Name') {
				direction = 'des'
				sortedData = data.sort((a,b) => {
					return a.Name.localeCompare(b.Name);
				});
			} 
			else if (direction === 'des' && column === 'Name')  {
				direction = 'asc';
				sortedData = data.sort((a,b) => {
					return a.Name.localeCompare(b.Name)
				}).reverse();
			}
			if (direction === 'asc' && column === 'Position') {
				direction = 'des'
				sortedData = data.sort((a,b) => {
					return a.Position.localeCompare(b.Position);
				});
			} 
			else if (direction === 'des' && column === 'Position') {
				direction = 'asc';
				sortedData = data.sort((a,b) => {
					return a.Position.localeCompare(b.Position)
				}).reverse();
			}
			if (direction === 'asc' && column === 'fantasyPoints') {
				console.log('it')
				direction = 'des'
				sortedData = data.sort((a,b) => {
					return (a.fantasyPoints)-(b.fantasyPoints);
				});
			} 
			else if (direction === 'des' && column === 'fantasyPoints') {
				console.log()
				direction = 'asc';
				sortedData = data.sort((a,b) => {
					return (a.fantasyPoints)-(b.fantasyPoints);
				}).reverse();
			}
			dispatch({type: GET_ALL_PLAYER_STATS,payload: sortedData, direction});
		} catch (e) {
			dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
		}
	}