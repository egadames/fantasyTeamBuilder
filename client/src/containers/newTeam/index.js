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
} from "semantic-ui-react";
import { connect } from "react-redux";
import _ from 'lodash';
import { getAllPlayerStats, sortPlayersByName } from "../../actions/createTeam";
import axios from 'axios';

class AllPlayers extends Component {
  state = {
    team: [],
    // column: null, 
    activePage: 1,
    start: 0,
    end: 10,
  };

  componentDidMount() {
    this.props.getAllPlayerStats();
  }

  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10,
    });
  };

  // onSubmit = async(formValues, dispatch) => {
	// 	try {
	// 		const { data } = await axios.post('/api/auth/signin', formValues);
	// 		console.log(data)
	// 		localStorage.setItem('token', data.token);
	// 		dispatch({ type: AUTH_USER, payload: data.token});
	// 		this.props.history.push('/counter');
	// 	} catch (e) {
	// 		throw new SubmissionError({
	// 			email: 'Wrong Email',
	// 			password: 'Wrong Password',
	// 			_error: 'SignIn Failed'
	// 		});
	// 	}
  // }
  
  renderLoadBox = () => {
    const add = (a, b) =>  a + b;
    const fantasyPoints = _.map(this.state.team, 'fantasyPoints');
    const sum = fantasyPoints.length === 0 ? 0 : fantasyPoints.reduce(add)   
    return (
      <Container
        fluid
        style={{ border: "solid", height: "50vh", width: "100vh" }}
      >
      <Segment clearing>
        <Button>Make Team</Button>
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
    console.log(player)
    this.setState({team: [...this.state.team, player]})
  };

  renderPlayerTable = () => {
    console.log(this.props.playerStats)
    if (this.props.playerStats.length === 0) {
      return <Header content="No players yet" />;
    } else {
      return this.props.playerStats
      .slice(this.state.start, this.state.end)
        .map(
          ({
            PlayerID,
            Name,
            Position,
            PhotoUrl,
            fantasyPoints,
            Games,
          }) => {
            return (
            <Table.Row key={PlayerID}>
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
                    PlayerID,
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
              onClick={() => this.props.sortPlayersByName(this.props.direction)}
              textAlign="center"
              >Name</Table.HeaderCell>
              <Table.HeaderCell 
                sorted={column === 'Position' ? direction : null}
                onClick={ () => this.handleSort('Position')}
                textAlign="center"
                >Position</Table.HeaderCell>
              <Table.HeaderCell 
              sorted={column === 'fantasyPoints' ? direction : null}
              onClick={ () => this.handleSort('fantasyPoints')}
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
  playerStats: { playerStats, GET_ALL_PLAYER_STATS_ERROR, direction },
}) {return { playerStats, GET_ALL_PLAYER_STATS_ERROR, direction };}

export default connect(mapStateToProps, { getAllPlayerStats, sortPlayersByName })(AllPlayers);
