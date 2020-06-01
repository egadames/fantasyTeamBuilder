import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import { getAllTeams, addTeam, addPlayer, getCurrentTeam } from "../../actions/team";
import {
  getAllPlayerStats,
  sortPlayers,
  filterDataByName,
  filterDataByPosition,
} from "../../actions/player";
import axios from "axios";
import { 
  GET_ALL_TEAMS, 
  ADD_PLAYER_TO_TEAM
} from "../../actions/types";

import FullTable from '../../components/FullTable';
import CreateTeamBox from '../../components/CreateTeamBox'

import requireAuth from './../../hoc/requireAuth';

class AllPlayers extends Component {
  state = {
    searchQuery: "",
    newTeam: [],
    activePage: 1,
    start: 0,
    end: 10,
    value: "",
  };

  async componentDidMount() {
    await this.props.getAllPlayerStats();
    await this.props.getAllTeams();
    await this.props.getCurrentTeam();
    // this.setState({ newTeam: [...this.state.newTeam, this.props.currentTeam] });
  }

  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10,
    });
  };


  // onSubmit = async (dispatch) => {
  //   const team = this.state.newTeam;
  //   const points = _.sumBy(team, "fantasyPoints");
  //   try {
  //     const { data } = await axios.post("/api/team/", { team, points });
  //     localStorage.setItem('token', data.token);
  //     dispatch({ type: GET_ALL_TEAMS, payload: data}, {type: ADD_PLAYER_TO_TEAM, payload: []} );
  //     dispatch({type: ADD_PLAYER_TO_TEAM, payload: []} );
  //     this.props.history.push("/");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  handleDelete = async (id) => {
    const data = this.state.newTeam;
    let filteredList = data.filter(function (player) {
      return player.PlayerID !== id;
    });
    try {
      this.setState({ newTeam: filteredList });
    } catch (e) {
      console.log(e);
    }
  };

  // addPlayer = (player, dispatch) => {
  //   console.log(dispatch)
  //   const data = JSON.stringify(this.state.newTeam);
  //   if (!data.includes(player.Name)) {
  //     this.setState({ newTeam: [...this.state.newTeam, player] });
  //     dispatch({type: ADD_PLAYER_TO_TEAM,	payload: player });
  //   }
  //   return;
  // };

  onChange = (e, { searchQuery, value }) => {
    this.setState({ searchQuery, value });
    this.props.filterDataByName(value);
    // dispatch({type: GET_ALL_PLAYER_STATS,payload: sortedData, direction});
  };

  onChangePosition = (e, { value }) => {
    console.log({ value })
    this.setState({ value });
    this.props.filterDataByPosition(value);
    // dispatch({type: GET_ALL_PLAYER_STATS,payload: sortedData, direction});
  };

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  render() {
    const names = this.props.playerStats.map((player) => {
      player.text = player.Name;
      player.value = player.Name;
      return player;
    });
    const position = [
      { text: "PG", value: "PG" },
      { text: "SG", value: "SG" },
      { text: "C",  value: "C"  },
      { text: "PF", value: "PF" },
      { text: "SF", value: "SF" },
    ];
    // let {currentTeam} = this.props.currentTeam;
    return (
      <Container>
        <CreateTeamBox
          currentTeam = {this.props.currentTeam}
          onSubmit = {this.props.addTeam}
          handleDelete = {this.handleDelete}
        />
        <FullTable
          sortPlayers={this.props.sortPlayers}
          direction={this.props.direction}
          names={names}
          onChange={this.onChange}
          onChangePosition={this.onChangePosition}
          searchQuery={this.state.searchQuery}
          position={position}
          playerStats = {this.props.playerStats}
          start = {this.state.start}
          end = {this.state.end}
          addPlayer = {this.props.addPlayer}
          currentTeam = {this.props.currentTeam}
          activePage = {this.state.activePage}
          handlePageChange = {this.handlePageChange}
          value = {this.state.value}
        />
      </Container>
    );
  }
}

function mapStateToProps({
  playerStats: { playerStats, GET_ALL_PLAYER_STATS_ERROR, direction },
  teams: { teams },
  currentTeam: { currentTeam }
}) {
  return { playerStats, GET_ALL_PLAYER_STATS_ERROR, direction, teams, currentTeam };
}

export default requireAuth(connect(mapStateToProps, {
  getAllPlayerStats,
  sortPlayers,
  getAllTeams,
  filterDataByName,
  filterDataByPosition,
  addTeam,
  addPlayer,
  getCurrentTeam,
})(AllPlayers));
