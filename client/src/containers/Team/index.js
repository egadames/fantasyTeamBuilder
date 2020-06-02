import React, { Component } from "react";
import {
  Header,
  Image,
  Card,
  Segment,
  Container,
  Grid,
  Label,
} from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import { getAllTeams, deleteTeam, getUserTeams } from "../../actions/team";
import Carousel from 'nuka-carousel';

import requireAuth from './../../hoc/requireAuth';

class AllTeams extends Component {

  componentDidMount() {
    this.props.getUserTeams();
  }

  renderLoadBox = () => {
    return (
      this.props.userTeams.map((team) => (
     <Container key = {team._id} style={{ border: "solid", margin: "auto",  }}>
        <Segment inverted clearing>
          <Header as="h1" >
          {console.log(team)}
          
            Total Fantasy Points: {_.sumBy(team.team, "fantasyPoints")}
          </Header>
          <Label
            attached='top right' 
            onClick ={ () => this.props.deleteTeam(team._id)}
            icon = 'delete'>
          </Label>
        </Segment>
        <Grid centered divided="vertically">
          <Grid.Row>
          {Array.isArray(team) ?(team.map((player, i) => (
              <Grid.Column key={i} width={3}>
                <Card inverted>
                  <Image
                    size="tiny"
                    style={{ margin: "10px auto -20px auto" }}
                    src={player.PhotoUrl}
                  />
                  <Header as="p" content={player.Name} textAlign="center" />
                </Card>
              </Grid.Column>
            ))) :
           (team.team.map((player, i) => (
              <Grid.Column key={i} width={3}>
                <Card>
                  <Image
                    size="tiny"
                    style={{ margin: "10px auto -20px auto" }}
                    src={player.PhotoUrl}
                  />
                  <Header as="p" content={player.Name} textAlign="center" />
                </Card>
              </Grid.Column>
            )))  
            }
          </Grid.Row>
        </Grid>
      </Container>
    )));
  };

  render() {
    return (
      <Container fluid style={{height: '86vh', margin: "auto"}}>
        <Carousel>
        {this.renderLoadBox()}
        </Carousel>
      </Container>
    );
  }
}

function mapStateToProps({
  teams: { teams }, userTeams: { userTeams } }) { return { teams, userTeams };
}

export default requireAuth(connect(mapStateToProps, {getAllTeams, deleteTeam, getUserTeams})(AllTeams));
