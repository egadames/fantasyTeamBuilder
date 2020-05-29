import React, { Component } from "react";
import {
  Header,
  Image,
  Card,
  Segment,
  Container,
  Grid,
  Button,
} from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import { getAllTeams } from "../../actions/createTeam";

class AllTeams extends Component {

  componentDidMount() {
    this.props.getAllTeams();
  }

  renderLoadBox = () => {
    const add = (a, b) => a + b;
    const fantasyPoints = _.map(this.props.teams, "fantasyPoints");
    const sum = fantasyPoints.length === 0 ? 0 : fantasyPoints.reduce(add);
    return (
      this.props.teams.map((currentTeam) => (
      <Container style={{ border: "solid", margin: "auto" }}>
        {        console.log(currentTeam)
}
        <Segment clearing>
          <Button onClick={() => this.onSubmit()}>Make Team</Button>
          <Header as="h1" floated="right">
            Total Fantasy Points: {sum}
          </Header>
        </Segment>
        <Grid centered divided="vertically">
          <Grid.Row>
            {currentTeam.team.map((player) => (
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
  teams: { teams },
}) {
  return { teams };
}

export default connect(mapStateToProps, {getAllTeams})(AllTeams);
