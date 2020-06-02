import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';

import Navbar from './../../components/Navbar';
import Homepage from  "../../components/Homepage";
import newTeam from '../newTeam';
import Teams from '../Team'
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className = 'background' >
          <Navbar authenticated={this.props.authenticated} />
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/team' component={newTeam}/>
          <Route exact path='/viewteams' component={Teams}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
