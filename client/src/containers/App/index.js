import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import "./style.css";

import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';

import Navbar from './../../components/Navbar';
import Homepage from  "../../components/Homepage";
import Footer from"../../components/Footer";
import newTeam from '../newTeam';
import Teams from '../Team'
// import NewTeamForm from '../../Data/Team/NewTeamForm';
// import players from '../../Data/Player/players';


class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/team' component={newTeam}/>
          <Route exact path='/viewteams' component={Teams}/>
          {/* <Route exact path='/teamform' component={NewTeamForm}/>
          <Route exact path='/players' component={players}/> */}

          {/* <Route exact path='/counter' component={Counter}/> */}
          <Footer />
      </div>
    )
  }
}

      // <div>
      //   <Navbar />
      //   <Homepage />
      //   <Footer />
      // </div>

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
