import React from "react";
import {
  Container,
  Grid,
  Segment,
  Button,
  Header,
  Label,
  Image
} from "semantic-ui-react";
import _ from "lodash";
import { withRouter } from 'react-router-dom';
// import { Link } from "@material-ui/core";


function CreateTeamBox(props) {
  const fantasyPoints = _.sumBy(props.currentTeam, "fantasyPoints");
  console.log(props.currentTeam)
  return (
    <Container style={{ border: "solid", margin: "auto", height: "71vh" }}>
      <Segment clearing>
        <Button 
        onClick={() => props.onSubmit(function() {
          props.history.push('/');
        })}>Make Team</Button>
        <Header as="h1" floated="right">
          Total Fantasy Points: {fantasyPoints}
        </Header>
      </Segment>
      <Grid centered divided="vertically">
        <Grid.Row>
          {props.currentTeam.map((player, i) => (
            <Grid.Column key = {i} width={3}>
              <Segment>
                {console.log(player)}
                <Label
                  attached="top right"
                  onClick={() => props.handleDelete(player.PlayerID)}
                  icon="delete"
                ></Label>
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


export default withRouter(CreateTeamBox);