import React from "react";
import {
  Container,
  Grid,
  Segment,
  Button,
  Header,
  Label,
  Image,
} from "semantic-ui-react";
import _ from "lodash";
import { withRouter } from "react-router-dom";
// import { Link } from "@material-ui/core";

function CreateTeamBox(props) {
  const fantasyPoints = _.sumBy(props.currentTeam, "fantasyPoints");
  return (
    <Container
      stackable
      fluid
      style={{
        margin: "auto",
        height: "100%",
        width: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        backgroundRepeat: "no-repeat",
        zIndex: "0",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1590227632180-80a3bf110871?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9')",
      }}
    >
      <Segment inverted clearing>
        <Button
          color={"blue"}
          onClick={() =>
            props.onSubmit(function () {
              props.history.push("/");
            })
          }
        >
          Make Team
        </Button>
        <Header as="h1" floated="right">
          Total Fantasy Points: {fantasyPoints}
        </Header>
      </Segment>
      <Grid divided="vertically">
        <Grid.Row>
          {props.currentTeam.map((player, i) => (
            <Grid.Column key={i} width={3}>
              <Segment inverted>
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
}

export default withRouter(CreateTeamBox);
