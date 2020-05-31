import React from "react";
import {
  Table,
  Header,
  Image,
  Button,
} from "semantic-ui-react";

export default (props) => {
  if (props.playerStats.length === 0) {
    return <Header content="No players yet" />;
  } else {
    return props.playerStats
      .slice(props.start, props.end)
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
                  props.addPlayer({
                    PlayerID,
                    Name,
                    Position,
                    PhotoUrl,
                    fantasyPoints,
                  })
                }
                disabled={props.newTeam.length > 9}
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


