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
import { getAllTeams, deleteTeam } from "../../actions/team";

import requireAuth from './../../hoc/requireAuth';

class AllTeams extends Component {

  componentDidMount() {
    this.props.getAllTeams();
  }

  renderLoadBox = () => {
    return (
      this.props.teams.map((currentTeam) => (
     <Container key = {currentTeam._id} style={{ border: "solid", margin: "auto" }}>
        <Segment clearing>
          {/* <Button onClick={() => this.onSubmit()}>Make Team</Button> */}
          <Header as="h1" >
            Total Fantasy Points: {_.sumBy(currentTeam.team, "fantasyPoints")}
          </Header>
          <Label
            attached='top right' 
            onClick ={ () => this.props.deleteTeam(currentTeam._id)}
            icon = 'delete'>
          </Label>
        </Segment>
        <Grid centered divided="vertically">
          <Grid.Row>
            {currentTeam.team.map((player, i) => (
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
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    )));
  };

  render() {
    return (
      <Container>
        {this.renderLoadBox()}
      </Container>
    );
  }
}

function mapStateToProps({
  teams: { teams }}) { return { teams };
}

export default requireAuth(connect(mapStateToProps, {getAllTeams, deleteTeam})(AllTeams));
