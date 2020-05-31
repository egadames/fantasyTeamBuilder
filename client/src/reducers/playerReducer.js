import { 
	GET_ALL_PLAYER_STATS, 
	GET_ALL_PLAYER_STATS_ERROR, 
	ADD_PLAYER_TO_TEAM,
	ADD_PLAYER_TO_TEAM_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
	playerStats: [],
	currentTeam: [],
	GET_ALL_PLAYER_STATS_ERROR: '',
	direction: 'asc'
};
export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_ALL_PLAYER_STATS:
			return {...state, playerStats: action.payload, GET_ALL_PLAYER_STATS_ERROR: '', direction: action.direction };
		case GET_ALL_PLAYER_STATS_ERROR:
			return {...state, GET_ALL_PLAYER_STATS_ERROR: action.payload };
    case ADD_PLAYER_TO_TEAM:
      return {...state, currentTeam: action.payload, ADD_PLAYER_TO_TEAM_ERROR: ''};
    case ADD_PLAYER_TO_TEAM_ERROR:
      return {...state, ADD_PLAYER_TO_TEAM_ERROR: action.payload };
    default:
    return state;
	}
}

// import * as actionTypes from '../actions/actionTypes'

// const initialState = {
//   scatterDataName: "",
//   scatterData: [],
//   highlightedPoint : [],
//   player : "JamesHarden",
//   optimized: false
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case actionTypes.CHANGE_SCATTER_DATA:
//       return changeScatterData(state, action);
//     case actionTypes.SET_HIGHLIGHTED_POINT:
//       return setHighlightedPoint(state, action);
//     case actionTypes.CHANGE_PLAYER:
//       return changePlayer(state, action);
//     case actionTypes.SWITCH_DATA:
//       return switchData(state, action);
//     default:
//       return state;
//   }
// }

// function changeScatterData(state, action) {
//   const { scatterDataName, scatterData } = action;
//   return { ...state, scatterDataName, scatterData };
// }

// function setHighlightedPoint(state, action) {
//   const { highlightedPoint } = action;
//   return { ...state, highlightedPoint };
// }

// function changePlayer(state, action) {
//   const { player } = action;
//   return { ...state, player };
// }

// function switchData(state, action) {
//   const { optimized } = action;
//   return { ...state, optimized };
// }
