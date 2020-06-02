import React from "react";
import {
  Table,
  Dropdown,
} from "semantic-ui-react";

export default (props) => (
  <Table.Header >
  <Table.Row >
      <Table.HeaderCell
        onClick={() => props.sortPlayers(props.direction, "Name")}
        textAlign="center"
        content="Name"
        
      ></Table.HeaderCell>
      <Table.HeaderCell
        onClick={() => props.sortPlayers(props.direction, "Position")}
        textAlign="center"
        content="Position"
      >
      </Table.HeaderCell>
      <Table.HeaderCell
        onClick={() =>
          props.sortPlayers(props.direction, "fantasyPoints")
        }
        textAlign="center"
        content="Fantasy Points"
      >
      </Table.HeaderCell>
      <Table.HeaderCell textAlign="center" content="Add to team"
      ></Table.HeaderCell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>
        <Dropdown
          fluid
          options={props.names}
          selection
          placeholder="Select"
          search
          clearable
          onChange={props.onChange}
          searchQuery={props.searchQuery}
          onSearchChange={props.onChange}
        />
      </Table.Cell>
      <Table.Cell>
        <Dropdown
        onChange={props.onChangePosition}
        fluid
        options={props.position}
        placeholder="Select"
        selection
        value={props.value}
        clearable
        />
      </Table.Cell>
    </Table.Row>
  </Table.Header>
);
