import React, { Component } from "react";
import {
  Header,
  Image,
  Pagination,
  Placeholder,
  Button,
  Card,
  Menu,
  Table,
  Container,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { getAllPlayerStats } from "../../actions/createTeam";

class AllPlayers extends Component {
  state = {
    team: [],
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

  renderLoadBox = () => {
    return (
      <Container
        fluid
        style={{ border: "solid", height: "50vh", width: "100vh" }}
      >
        <Menu.Item
          name="Points"
          fixed={"left"}
        // onClick={this.handleItemClick}
        />
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
              <Table unstackable celled padded columns={4}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      Position
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      Fantasy Points
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      Add to team
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
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
                </Table.Body>
              </Table>
            );
          }
        );
    }
  };

  render() {
    return (
      <Container>
        {this.renderLoadBox()}
        {this.renderPlayerTable()}
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

// renderPlayerList = () => {
//   if (this.props.playerStats.length === 0) {
//     return <Header content="No players yet" />;
//   } else {
//     return this.props.playerStats.map(
//       ({
//         PlayerId,
//         Name,
//         Position,
//         PhotoUrl,
//         Team,
//         Rebounds,
//         Assists,
//         Steals,
//         Turnovers,
//         BlockedShots,
//         Points,
//         Games,
//       }) => {
//         return (
//           <div>
//             <Card
//             fluid
//               image={PhotoUrl}
//               header={Name}
//               meta="Friend"
//               description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
//               extra={Name}
//             />
//           </div>
//         );
//       }
//     );
//   }
// };

// renderPlayerList = () => {
//   if (this.props.playerStats.length === 0) {
//     return <Header content="No players yet" />;
//   } else {
//     return this.props.playerStats.map(
//       ({
//         PlayerId,
//         Name,
//         Position,
//         PhotoUrl,
//         Team,
//         Rebounds,
//         Assists,
//         Steals,
//         Turnovers,
//         BlockedShots,
//         Points,
//         Games,
//       }) => {
//         return (
//           <Container fluid>
//             <Item>
//               <Item.Image src={PhotoUrl} />

//               <Item.Content>
//                 <Item.Header as="a">Watchmen</Item.Header>
//                 <Item.Meta>
//                   <span className="cinema">IFC</span>
//                 </Item.Meta>
//                 <Item.Description>{Name}</Item.Description>
//                 <Item.Extra>
//                   <Button primary floated="right">
//                     Buy tickets
//                     <Icon name="right chevron" />
//                   </Button>
//                 </Item.Extra>
//               </Item.Content>
//             </Item>
//           </Container>
//         );
//       }
//     );
//   }
// };

// renderPlayerList = () => {
//   if (this.props.playerStats.length === 0) {
//     return <Header content="No players yet" />;
//   } else {
//     return this.props.playerStats.map(
//       ({ PlayerId, Name, Position, PhotoUrl, Team, Rebounds, Assists, Steals, Turnovers, BlockedShots, Points, Games }) => {
//         return (
//           <div>
//             <List>
//               <List.Item key={PlayerId}>
//                 <List.Content>
//                   <Image src={PhotoUrl} floated="left" />
//                   <Divider />
//                   <List.Header floated="left">
//                     {Name}
//                   </List.Header>
//                   <List.Description>
//                    Team: {Team}
//                   </List.Description>
//                   <List.Description>
//                     Rebounds: {Rebounds/Games}
//                   </List.Description>
//                   <List.Description>
//                     Assists: {Assists/Games}
//                   </List.Description>
//                   <List.Description>
//                     Steals: {Steals/Games}
//                   </List.Description>
//                   <List.Description>
//                     Turnovers: {Turnovers/Games}
//                   </List.Description>
//                   <List.Description>
//                     Blocked Shots: {BlockedShots/Games}
//                   </List.Description>
//                   <List.Description>
//                     Points Per Game: {Points/Games}
//                   </List.Description>
//                   <List.Description>
//                     Games: {Games}
//                   </List.Description>
//                 </List.Content>
//               </List.Item>
//             </List>
//           </div>
//         );
//       }
//     );
//   }
// };

// 	render() {
// 		return (
// 			<>
// 				<Header as='h2' color='teal' textAlign='center' content='Welcome to the todo app'/>
// 				<List animated divided selection>
// 					<playerList
// 						playerStats={this.props.playerStats}
// 					/>
// 				</List>
// 			</>
// 		);
// 	}
// }

// renderPlayerList = (props) => {
//   return (
//     <MaterialTable
//       title="Render Image Preview"
//       columns={[
//         {
//           title: "Image",
//           field: "imageUrl",
//           render: (rowData) => (
//             <img
//               src={rowData.imageUrl}
//               style={{ width: 40, borderRadius: "50%" }}
//             />
//           ),
//         },
//         { title: "Name", field: "name" },
//         { title: "Surname", field: "surname" },
//         { title: "Birth Year", field: "birthYear", type: "numeric" },
//         {
//           title: "Birth Place",
//           field: "birthCity",
//           lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
//         },
//       ]}
//       data={this.props.playerStats.map(
//         ({ PlayerID, Name, Position, Points, PhotoUrl }) => [
//           { name: `${Name}` },
//           { surname: `${Position}` },
//           { birthYear: `${Points}` },
//           { birthCity: `${PlayerID}` },
//           { imageUrl: `${PhotoUrl}` },
//         ]
//       )}
//     />
//   );
// };

// renderLoadBox = () => {
//   return (
//     <Container fluid style={{border: 'solid', height: "50vh", width: '100vh' }}>
//       <Menu.Item
//         name="Points"
//         fixed={"left"}
//         // onClick={this.handleItemClick}
//       />
//       <Card.Group itemsPerRow={5}>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//       </Card.Group>
//       <Card.Group itemsPerRow={5}>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//         <Card>
//           <Card.Content>
//             <Placeholder>
//               <Placeholder.Image rectangular />
//             </Placeholder>
//           </Card.Content>
//         </Card>
//       </Card.Group>
//     </Container>
//   );
// };
