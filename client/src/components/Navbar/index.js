import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default (props) => (
  <Menu widths={4}>
    { props.authenticated ? null : <Menu.Item as={Link} to='/signup' content='Sign Up'/> }
    { props.authenticated ?  <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
    <Menu.Item as={Link} to='/team' content='Create a Team'/>
    { props.authenticated ? <Menu.Item as={Link} to='/usertodos' content='My Todos'/> : null   }
    <Menu.Item as={Link} to='/viewteams' content='View All Teams'/>
  </Menu>
);
