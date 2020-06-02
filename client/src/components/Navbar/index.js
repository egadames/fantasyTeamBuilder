import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default (props) => (
  <Menu inverted widths={4}>
    <Menu.Item as={Link} to="/" content="Home Page" />
    {props.authenticated ? null : (
      <Menu.Item as={Link} to="/signup" content="Sign Up" />
    )}
    {props.authenticated ? (
      <Menu.Item as={Link} to="/signout" content="Sign Out" />
    ) : (
      <Menu.Item as={Link} to="/signin" content="Sign In" />
    )}
    { props.authenticated ? <Menu.Item as={Link} to='/viewteams' content='View Your Teams'/>  : null }
    {props.authenticated ? (
      <Menu.Item as={Link} to="/team" content="Create a Team" />
    ) : null}
  </Menu>
);
