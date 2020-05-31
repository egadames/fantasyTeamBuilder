import React from "react";
import {
  Table,
  Grid,
  Pagination,
} from "semantic-ui-react";
import TableHeaders from "../../components/TableHeaders";
import PlayerTable from '../../components/PlayerTable'

export default (props) => (
  <Grid
    textAlign="center"
    style={{ height: "50vh", marginTop: "5vh" }}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 550 }}>
      <Table
        style={{ width: "70vh" }}
        verticalAlign="middle"
        sortable
        unstackable
        celled
        padded
        columns={4}
      >
        <TableHeaders
          sortPlayers={props.sortPlayers}
          direction={props.direction}
          names={props.names}
          onChange={props.onChange}
          onChangePosition={props.onChangePosition}
          searchQuery={props.searchQuery}
          position={props.position}
        />
        <Table.Body>
          <PlayerTable
          playerStats = {props.playerStats}
          start = {props.start}
          end = {props.end}
          addPlayer = {props.addPlayer}
          currentTeam = {props.currentTeam}
          />  
        </Table.Body>

      </Table>
      <Pagination
        totalPages={Math.ceil(props.playerStats.length / 10)}
        activePage={props.activePage}
        onPageChange={(e, data) => props.handlePageChange(e, data)}
      />
    </Grid.Column>
  </Grid>
  );
