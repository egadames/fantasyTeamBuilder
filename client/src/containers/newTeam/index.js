import React, { Component } from "react";
import {
  Header,
  Image,
  Pagination,
  Button,
  Card,
  Segment,
  Table,
  Container,
  Grid,
} from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import { getAllPlayerStats, sortPlayersByName, getAllTeams } from "../../actions/createTeam";
import axios from "axios";
import { GET_ALL_TEAMS_ERROR, GET_ALL_PLAYER_STATS_ERROR, GET_ALL_TEAMS } from "../../actions/types";

class AllPlayers extends Component {
  state = {
    newTeam: [],
    // column: null,
    activePage: 1,
    start: 0,
    end: 10,
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
      const { newTeam } = await axios.post("/api/team/", data);
      console.log(newTeam);
      // localStorage.setItem('token', data.token);
      dispatch({ type: GET_ALL_TEAMS, payload: newTeam});
      this.props.history.push("/");
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
                <Card>
                  <Image
                    size="tiny"
                    style={{ margin: "10px auto -20px auto" }}
                    src={player.PhotoUrl}
                  />
                  <Header as="p" content={player.Name} textAlign="center" />
                </Card>
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

    this.setState({ newTeam: [...this.state.newTeam, player] });
  };

  renderPlayerTable = () => {
    console.log(this.props.playerStats);
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
                  disabled={this.state.length < 10}
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

  render() {
    console.log(this.props.teams)
    const { column, direction } = this.state;
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
                    sorted={column === "Name" ? direction : null}
                    onClick={() =>
                      this.props.sortPlayersByName(this.props.direction)
                    }
                    textAlign="center"
                  >
                    Name
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === "Position" ? direction : null}
                    onClick={() => this.handleSort("Position")}
                    textAlign="center"
                  >
                    Position
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === "fantasyPoints" ? direction : null}
                    onClick={() => this.handleSort("fantasyPoints")}
                    textAlign="center"
                  >
                    Fantasy Points
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    Add to team
                  </Table.HeaderCell>
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
  sortPlayersByName,
  getAllTeams,
})(AllPlayers);
