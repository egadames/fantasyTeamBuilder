import React, { Component } from "react";
import {
  Header,
  Image,
  Pagination,
  Button,
  Dropdown,
  Segment,
  Table,
  Container,
  Grid,
  Label,
} from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import { getAllPlayerStats, sortPlayers, getAllTeams, filterData } from "../../actions/createTeam";
import axios from "axios";
import { GET_ALL_TEAMS_ERROR, GET_ALL_PLAYER_STATS_ERROR, GET_ALL_TEAMS } from "../../actions/types";

class AllPlayers extends Component {
  state = {
    searchQuery: '',
    newTeam: [],
    // column: null,
    activePage: 1,
    start: 0,
    end: 10,
    value: '',
  };

  componentDidMount() {
    this.props.getAllPlayerStats();
    this.props.getAllTeams();
  }

  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10,
    });
  };

  onSubmit = async (dispatch) => {
    const data = this.state.newTeam;
    try {
      console.log(this.props)
      const { newTeam } = await axios.post("/api/team/", data);
      // localStorage.setItem('token', data.token);
      dispatch({ type: GET_ALL_TEAMS, payload: newTeam});
      this.props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  handleDelete = async (id) => {
    const data = this.state.newTeam;
    let filteredList =  data.filter(function(player) {
      return player.PlayerID !== id;
    });
    try {
      this.setState({ newTeam: filteredList });
    } catch (e) {
      console.log(e);
    }
  };


  renderLoadBox = () => {
    const add = (a, b) => a + b;
    const fantasyPoints = _.map(this.state.newTeam, "fantasyPoints");
    const sum = fantasyPoints.length === 0 ? 0 : fantasyPoints.reduce(add);
    return (
      <Container style={{ border: "solid", margin: "auto" }}>
        <Segment clearing>
          <Button onClick={() => this.onSubmit()}>Make Team</Button>
          <Header as="h1" floated="right">
            Total Fantasy Points: {sum}
          </Header>
        </Segment>
        <Grid centered divided="vertically">
          <Grid.Row>
            {this.state.newTeam.map((player) => (
              <Grid.Column width={3}>
                <Segment >
                  <Label
                  attached='top right' 
                  onClick ={ () => this.handleDelete(player.PlayerID)}
                  icon = 'delete'></Label>
                  <Image
                    size="tiny"
                    style={{ margin: "10px auto -20px auto" }}
                    src={player.PhotoUrl}
                  />
                  <Header as="p" content={player.Name} textAlign="center" />
                </Segment>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    );
  };

  addPlayer = (player) => {
    const data = JSON.stringify(this.state.newTeam);
    console.log(data);
    console.log(data.includes(player.Name));
    if(!data.includes(player.Name)){
      this.setState({ newTeam: [...this.state.newTeam, player] });
    }
    return "NOT ALLOWED";
  };

  // filterData = (filter) => {
  //   const names = this.props.playerStats.map((player) => {
  //     player.text= player.Name
  //     return player;
  //   });
  // }

  renderPlayerTable = () => {
    if (this.props.playerStats.length === 0) {
      return <Header content="No players yet" />;
    } else {
      return this.props.playerStats
        .slice(this.state.start, this.state.end)
        .map(({ PlayerID, Name, Position, PhotoUrl, fantasyPoints, Games }) => {
          return (
            <Table.Row key={PlayerID}>
              <Table.Cell>
                <Image
                  size="tiny"
                  src={PhotoUrl}
                  style={{ margin: "10px auto -20px auto" }}
                />
                <Header as="h4" content={Name} textAlign="center" />
              </Table.Cell>
              <Table.Cell singleLine textAlign="center">
                <Header as="h2" content={Position} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Header as="h2" content={Games === 0 ? 0 : fantasyPoints} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Button
                  onClick={() =>
                    this.addPlayer({
                      PlayerID,
                      Name,
                      Position,
                      PhotoUrl,
                      fantasyPoints,
                    })
                  }
                  disabled={this.state.newTeam.length > 9}
                  color="blue"
                  content="Add player to team"
                  size="mini"
                />
              </Table.Cell>
            </Table.Row>
          );
        });
    }
  };

  // handleChange = (e, { searchQuery, value }) =>
  //   this.setState({ searchQuery, value })


    onChange = (e, { searchQuery, value }) => async dispatch => {
  // this.setState({ searchQuery })
console.log(searchQuery)
  // dispatch({type: GET_ALL_PLAYER_STATS,payload: sortedData, direction});

}

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render()  {
    const { searchQuery } = this.state
    console.log(searchQuery)
    const names = this.props.playerStats.map((player) => {
      player.text= player.Name
      return player;
    });
    // const positions = _.map(this.props.playerStats, 'Position')
    // const points = _.map(this.props.playerStats, 'fantasyPoints')
    return (
      <Container>
        {this.renderLoadBox()}
        <Grid
          textAlign="center"
          style={{ height: "50vh", marginTop: "5vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 550 }}>
            <Table
              style={{ width: "70vh" }}
              verticalAlign="middle"
              sortable
              unstackable
              celled
              padded
              columns={4}
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    onClick={() =>
                      this.props.sortPlayers(this.props.direction, 'Name')
                    }
                    textAlign="center"
                    content="Name"
                  >

                  </Table.HeaderCell>
                  <Table.HeaderCell
                    onClick={() =>
                      this.props.sortPlayers(this.props.direction, 'Position')
                    }
                    textAlign="center"
                  >
                    Position
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    onClick={() =>
                      this.props.sortPlayers(this.props.direction, 'fantasyPoints')
                    }                    
                    textAlign="center"
                  >
                    Fantasy Points
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    Add to team
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                {/* <Dropdown
                  fluid
                  options={names}
                  placeholder='Select a Player'
                  search
                  searchQuery={searchQuery}
                  selection
                  // value={value}
                  onSearchChange={this.handleSearchChange}
                  // onChange={this.onChange}
                  onChange={this.props.filterData(searchQuery)}
                  // onSearchChange = {() => this.props.filterData(this.props.event,names)}
  /> */}
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.renderPlayerTable()}</Table.Body>
            </Table>
            <Pagination
              totalPages={Math.ceil(this.props.playerStats.length / 10)}
              activePage={this.state.activePage}
              onPageChange={(e, data) => this.handlePageChange(e, data)}
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps({
  playerStats: { playerStats, GET_ALL_PLAYER_STATS_ERROR, direction },
  teams: { teams },
}) {
  return { playerStats, GET_ALL_PLAYER_STATS_ERROR, direction, teams };
}

export default connect(mapStateToProps, {
  getAllPlayerStats,
  sortPlayers,
  getAllTeams,
  filterData,
})(AllPlayers);


// handleSearchChange = (e, { searchQuery }) => async dispatch => {
//   this.setState({ searchQuery })
// console.log(this.state.searchQuery)
//   // dispatch({type: GET_ALL_PLAYER_STATS,payload: sortedData, direction});

// }