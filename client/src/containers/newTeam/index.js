import React, { Component } from "react";
import {
  Header,
  Image,
  Pagination,
  Placeholder,
  Button,
  Card,
  Segment,
  Table,
  Container,
} from "semantic-ui-react";
import { connect } from "react-redux";
import _ from 'lodash';
import { getAllPlayerStats } from "../../actions/createTeam";

class AllPlayers extends Component {
  state = {
    team: [],
    column: null,
    data: this.props.playerStats,
    direction: null,
    activePage: 1,
    start: 0,
    end: 10,
  };

  componentDidMount() {
    this.props.getAllPlayerStats();
    // console.log(this.props.getAllPlayerStats)
    // this.setState({data: this.props.playerStats})

  }

  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10,
    });
  };

  renderLoadBox = () => {
    const add = (a, b) =>  a + b;
    const fantasyPoints = _.map(this.state.team, 'fantasyPoints');
    console.log(fantasyPoints = fantasyPoints || 0);
    const sum = fantasyPoints.length === 0 ? 0 : fantasyPoints.reduce(add)   
    return (
      <Container
        fluid
        style={{ border: "solid", height: "50vh", width: "100vh" }}
      >
      <Segment clearing>
        <Header as='h1' floated='right'>
          Total Fantasy Points: {sum}
        </Header>
      </Segment>
        <Card.Group itemsPerRow={5}>
          {this.state.team.map( player => (
            <Card>
            <Card.Content>
          <Image src={player.PhotoUrl}/>
            </Card.Content>
          </Card>
          ))}
          {/* <Card>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
                <Image></Image>
              </Placeholder>
            </Card.Content>
          </Card> */}
        </Card.Group>
      </Container>
    );
  };

  addPlayer = (player) => {
    this.setState({team: [...this.state.team, player]})
  };

  handleSort = (clickedColumn) => () => {
    const names = _.map(this.props.playerStats, 'Name');
    const position = _.map(this.props.playerStats, 'Position');
    const fantasyPoints = _.map(this.props.playerStats, 'fantasyPoints');
    const { column, direction } = this.state;
    
    if (column !== clickedColumn && clickedColumn === 'Name') {
      this.setState({column: clickedColumn,data: _.sortBy(names, [clickedColumn]),direction: 'ascending',})
      return
    } else if (column !== clickedColumn && clickedColumn === 'Position') {
      this.setState({column: clickedColumn,data: _.sortBy(position, [clickedColumn]),direction: 'ascending',})
      return
    } else if (column !== clickedColumn && clickedColumn === 'fantasyPoints') {
      this.setState({column: clickedColumn,data: _.sortBy(fantasyPoints, [clickedColumn]),direction: 'ascending',})
      return
    }
    this.setState({
      data: this.props.playerStats.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  renderPlayerTable = () => {
    if (this.props.playerStats.length === 0) {
      return <Header content="No players yet" />;
    } else {
      return this.props.playerStats
        .slice(this.state.start, this.state.end)
        .map(
          ({
            PlayerId,
            Name,
            Position,
            PhotoUrl,
            Team,
            Rebounds,
            Assists,
            Steals,
            Turnovers,
            BlockedShots,
            Points,
            Games,
          }) => {
            let fantasyPoints = Math.ceil(
              (Points +
                Rebounds * 1.2 +
                Assists * 1.5 +
                Steals * 3 +
                BlockedShots * 3 +
                Turnovers * -1) /
              Games
            )
            return (
              // <Table unstackable celled padded columns={4}>
              //   <Table.Header>
              //     <Table.Row>
              //       <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
              //       <Table.HeaderCell textAlign="center">
              //         Position
              //       </Table.HeaderCell>
              //       <Table.HeaderCell textAlign="center">
              //         Fantasy Points
              //       </Table.HeaderCell>
              //       <Table.HeaderCell textAlign="center">
              //         Add to team
              //       </Table.HeaderCell>
              //     </Table.Row>
              //   </Table.Header>
              //   <Table.Body>
                  <Table.Row key={PlayerId}>
                    <Table.Cell>
                      <Image
                        src={PhotoUrl}
                        style={{ margin: "10px auto -20px auto" }}
                      />
                      <Header as="h4" content={Name} textAlign="center" />
                    </Table.Cell>
                    <Table.Cell singleLine textAlign="center">
                      <Header as="h2" content={Position} />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Header
                        as="h2"
                        content={Games === 0 ? 0 : fantasyPoints}
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        onClick={() => this.addPlayer({
                          PlayerId,
                          Name,
                          Position,
                          PhotoUrl,
                          fantasyPoints,
                        })}
                        disabled={this.state.length<10}
                        color="blue"
                        content="Add player to team"
                        size="mini"
                      />
                    </Table.Cell>
                  </Table.Row>

            );
          }
        );
    }
  };

  render() {
    const { column, direction } = this.state
    return (
      <Container>
        {this.renderLoadBox()}
        <Table sortable unstackable celled padded columns={4}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell               
              sorted={column === 'Name' ? direction : null}
              onClick={this.handleSort('Name')}
              textAlign="center"
              >Name</Table.HeaderCell>
              <Table.HeaderCell 
                sorted={column === 'Position' ? direction : null}
                onClick={this.handleSort('Position')}
                textAlign="center"
                >Position</Table.HeaderCell>
              <Table.HeaderCell 
              sorted={column === 'fantasyPoints' ? direction : null}
              onClick={this.handleSort('fantasyPoints')}
              textAlign="center">Fantasy Points</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Add to team</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderPlayerTable()}
          </Table.Body>
        </Table>
        <Pagination
          totalPages={Math.ceil(this.props.playerStats.length / 10)}
          activePage={this.state.activePage}
          onPageChange={(e, data) => this.handlePageChange(e, data)}
        />
      </Container>
    );
  }
}

function mapStateToProps({
  playerStats: { playerStats, GET_ALL_PLAYER_STATS_ERROR },
}) {
  return { playerStats, GET_ALL_PLAYER_STATS_ERROR };
}

export default connect(mapStateToProps, { getAllPlayerStats })(AllPlayers);
