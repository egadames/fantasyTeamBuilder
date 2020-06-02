import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "./style.css";

import { connect } from "react-redux";
import { getAllTeams, addTeam, addPlayer, getCurrentTeam, deletePlayer } from "../../actions/team";
import {
  getAllPlayerStats,
  sortPlayers,
  filterDataByName,
  filterDataByPosition,
} from "../../actions/player";
import { 
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
      start: data.activePage === 1 ? 0 : data.activePage * 5 - 5,
      end: data.activePage * 5,
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
      <div style ={{ maxWidth: '90%', height: '100%'}}>
        <div style ={{maxWidth: '80%', height: '100vh' }} >
        <Grid columns={16}>
          <Grid.Column floated='left' width={13} >
               <CreateTeamBox
            currentTeam = {this.props.currentTeam}
            onSubmit = {this.props.addTeam}
            handleDelete = {this.props.deletePlayer}
          />
          </Grid.Column>
        <Grid.Column floated='right' width={3}>
        <FullTable
            style ={{}}
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
        </Grid.Column>
        </Grid>
        </div>
      </div>
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
