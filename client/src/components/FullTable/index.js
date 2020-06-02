import React from "react";
import {
  Table,
  Grid,
  Pagination,
} from "semantic-ui-react";
import TableHeaders from "../../components/TableHeaders";
import PlayerTable from '../../components/PlayerTable'

export default (props) => (
  <div fluid>
  <Grid 
    textAlign="center"
    verticalAlign="middle"
  >
    <Grid.Column>
      <Table
        style={{ width: "52vh", height: '60vh' }}
        verticalAlign="middle"
        sortable
        unstackable
        collapsing
        celled
        inverted
        color={"black"}
        // padded
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
        totalPages={Math.ceil(props.playerStats.length / 5)}
        activePage={props.activePage}
        onPageChange={(e, data) => props.handlePageChange(e, data)}
      />
    </Grid.Column>
  </Grid>
  </div>
  );
