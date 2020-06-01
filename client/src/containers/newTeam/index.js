import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { getAllTeams, addTeam, addPlayer, getCurrentTeam, deletePlayer } from "../../actions/team";
import {
  getAllPlayerStats,
  sortPlayers,
  filterDataByName,
  filterDataByPosition,
} from "../../actions/player";
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
    end: 5,
    value: "",
  };

  async componentDidMount() {
    await this.props.getAllPlayerStats();
    await this.props.getAllTeams();
    await this.props.getCurrentTeam();
  }

  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10,
    });
  };

  handleDelete = async (id)  => (dispatch) => {
    const data = this.props.currentTeam;
    let filteredList = data.filter(function (player) {
      return player.PlayerID !== id;
    });
    try {
      dispatch({type: ADD_PLAYER_TO_TEAM, payload: filteredList} );
    } catch (e) {
      console.log(e);
    }
  };

  onChange = (e, { searchQuery, value }) => {
    this.setState({ searchQuery, value });
    this.props.filterDataByName(value);
  };

  onChangePosition = (e, { value }) => {
    console.log({ value })
    this.setState({ value });
    this.props.filterDataByPosition(value);
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
    return (
      <Container>
        <CreateTeamBox
          currentTeam = {this.props.currentTeam}
          onSubmit = {this.props.addTeam}
          handleDelete = {this.props.deletePlayer}
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
  deletePlayer,
})(AllPlayers));
