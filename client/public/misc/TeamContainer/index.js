// import React from 'react';
// import {
//   Header,
//   Image,
//   Card,
//   Segment,
//   Container,
//   Grid,
//   Button,
//   Label,
// } from "semantic-ui-react";

// renderLoadBox = () => {
//   // const add = (a, b) => a + b;
//   // const fantasyPoints = _.map(this.props.teams, "fantasyPoints");
//   // const sum = fantasyPoints.length === 0 ? 0 : fantasyPoints.reduce(add);
//   return (
//     this.props.teams.map((currentTeam) => (
//    <Container key={currentTeam._id} style={{ border: "solid", margin: "auto" }}>
//       <Segment clearing>
//         {/* <Button onClick={() => this.onSubmit()}>Make Team</Button> */}
//         <Header as="h1" >
//           Total Fantasy Points: {45}
//         </Header>
//         <Label
//           attached='top right' 
//           onClick ={ () => this.props.deleteTeam(currentTeam._id)}
//           icon = 'delete'>
//           </Label>
//       </Segment>
//       <Grid centered divided="vertically">
//         <Grid.Row>
//           {currentTeam.team.map((player) => (
//             <Grid.Column width={3}>
//               <Card>
//                 <Image
//                   size="tiny"
//                   style={{ margin: "10px auto -20px auto" }}
//                   src={player.PhotoUrl}
//                 />
//                 <Header as="p" content={player.Name} textAlign="center" />
//               </Card>
//             </Grid.Column>
//           ))}
//         </Grid.Row>
//       </Grid>
//     </Container>
//   )));

// };