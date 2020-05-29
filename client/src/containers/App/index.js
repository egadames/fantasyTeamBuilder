import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'


import "./style.css";

// import Counter from './../Counter';

// import AllTodosList from '../AllTodosList';
// import UserTodoList from '../UserTodoList';

import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';

import Navbar from './../../components/Navbar';
import Homepage from  "../../components/Homepage";
import Footer from"../../components/Footer";
import newTeam from '../newTeam';
import Teams from '../Team'

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
