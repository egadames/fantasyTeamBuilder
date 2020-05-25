import React, { Component } from "react";
import { List, Header, Image, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { getAllPlayerStats } from "../../actions/createTeam";

class AllPlayers extends Component {
  state = {
    activePage: 1,
    start: 0,
    end: 10,
  };

  componentDidMount() {
    this.props.getAllPlayerStats();
    console.log(this.props.getAllPlayerStats)
  }

  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10,
    });
  };

  renderTodoList = () => {
    if (this.props.playerStats.playerStats.length === 0) {
      return <Header content="No players yet" />;
    } else {
      return this.props.playerStats.playerStats.map(
        ({ _id, Name, Position, PhotoUrl, Team, Rebounds, Assists, Steals, Turnovers, BlockedShots, Points, Games }) => {
          return (
            <div>
              <List>
                <List.Item key={_id}>
                  <List.Content>
                    <Image src={PhotoUrl} floated="left" />
                    <Divider />
                    <List.Header floated="left">
                      {" "}
                      {Name}{" "}
                    </List.Header>
                    <List.Description>
                     Team: {Team}
                    </List.Description>
                    <List.Description>
                      Rebounds: {Rebounds/Games}
                    </List.Description>
                    <List.Description>
                      Assists: {Assists/Games}
                    </List.Description>
                    <List.Description>
                      Steals: {Steals/Games}
                    </List.Description>
                    <List.Description>
                      Turnovers: {Turnovers/Games}
                    </List.Description>
                    <List.Description>
                      Blocked Shots: {BlockedShots/Games}
                    </List.Description>
                    <List.Description>
                      Points Per Game: {Points/Games}
                    </List.Description>
                    <List.Description>
                      Games: {Games}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </div>
          );
        }
      );
    }
  };
  render() {
    return <List>{this.renderTodoList()}</List>;
  }
}

function mapStateToProps(state) {
  return {
    playerStats: state.playerStats,
    GET_ALL_PLAYER_STATS_ERROR: state.GET_ALL_PLAYER_STATS_ERROR,
  };
}

// function mapStateToProps({ playerStats: { playerStats, GET_ALL_PLAYER_STATS_ERROR }}) {
// 	return { playerStats, GET_ALL_PLAYER_STATS_ERROR };
// }
export default connect(mapStateToProps, { getAllPlayerStats })(AllPlayers);
