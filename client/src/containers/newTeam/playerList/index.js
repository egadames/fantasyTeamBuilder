import React from 'react';
import { Header, List, Divider, Image, Container, Button } from 'semantic-ui-react';

// import DeleteTodoModel from '../../../components/DeleteTodoModal'
// return props.playerStats.map(({PlayerId, Name, Position, PhotoUrl, Team, Rebounds, Assists, Steals, Turnovers, BlockedShots, Points, Games }) => {
// 	return (


export default (props) => {
	if (props.playerStats.length === 0) {
		return <Header content="No players yet" />;
	} else {
		return props.playerStats.map(
			({ PlayerId, Name, Position, PhotoUrl, Team, Rebounds, Assists, Steals, Turnovers, BlockedShots, Points, Games }) => {
				return (
					<Container>
						<Container fluid>
							<List>
								<List.Item>
									<List.Content floated="right">
										<Button>Add</Button>
									</List.Content>
									<Image src={PhotoUrl} floated="left" />
									<List.Content>
										<b>{Name}</b>
									</List.Content>
								</List.Item>
								<Divider />
							</List>
						</Container>
					</Container>
				);
			}
		);
	}
}
