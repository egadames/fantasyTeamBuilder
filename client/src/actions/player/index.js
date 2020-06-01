import {
	GET_ALL_PLAYER_STATS, 
	GET_ALL_PLAYER_STATS_ERROR,
	// ADD_PLAYER_TO_TEAM,
	// ADD_PLAYER_TO_TEAM_ERROR,
} from "../types";
import axios from 'axios';

export const getAllPlayerStats = () => async dispatch => {
	try {
		const { data } = await axios.get('/api/player', { headers: {'authorization': localStorage.getItem('token')}});
		dispatch({type: GET_ALL_PLAYER_STATS,payload: data, direction: 'asc' });
	} catch (e) {
		dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
	}
}

export const filterDataByName = (searchQuery) => async dispatch => {
	 try {
		let regex = new RegExp(searchQuery.toLowerCase());
		const { data } = await axios.get('/api/player', { headers: {'authorization': localStorage.getItem('token')}});
		let filteredData =  data.filter(function(player) {
      return !player.Name.toLowerCase().search(regex);
    });
		dispatch({type: GET_ALL_PLAYER_STATS, payload: filteredData, direction: 'asc'});
	} catch (e) {
		dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
	}
}

// onSubmit = async (dispatch) => {
// 	const team = this.state.newTeam;
// 	const points = _.sumBy(team, "fantasyPoints");
// 	try {
// 		const { data } = await axios.post("/api/team/", { team, points, headers: {'authorization': localStorage.getItem('token')}});
// 		localStorage.setItem('token', data.token);
// 		dispatch({ GET_ALL_TEAMS, payload: data});
// 		this.props.history.push("/");
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

export const filterDataByPosition = (searchQuery) => async dispatch => {
	console.log('imhut')
  try {
   let regex = new RegExp(searchQuery.toLowerCase());
	 const { data } = await axios.get('/api/player', { headers: {'authorization': localStorage.getItem('token')}});
	 
   let filteredData =  data.filter(function(player) {
     return !player.Position.toLowerCase().search(regex);
   });
   dispatch({type: GET_ALL_PLAYER_STATS, payload: filteredData, direction: 'asc'});
 } catch (e) {
   dispatch({type: GET_ALL_PLAYER_STATS_ERROR,	payload: e });
 }
}
	
	export const sortPlayers = (direction, column) => async (dispatch, getState) => {
		const {playerStats} = getState();
		// console.log(getState())
		const {currentTeam} = getState();
		console.log(currentTeam)
		try {
			const data = playerStats.playerStats;
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