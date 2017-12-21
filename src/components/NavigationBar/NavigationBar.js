import React, { Component } from 'react';
import {
  NavBar,
  NavLink,
  AuthenticateButton
} from './NavigationBar.style.js';

class NavigationBar extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render(){
    const { isAuthenticated } = this.props.auth;
    return(
      <NavBar>
        <NavLink>Home</NavLink>
        <NavLink>About us</NavLink>
        <NavLink>FAQ's</NavLink>
        {
          !isAuthenticated() && (
            <AuthenticateButton
              onClick={this.login.bind(this)}
            >
              Login
            </AuthenticateButton>
          )
        }
        {
          isAuthenticated() && (
            <AuthenticateButton
              onClick={this.logout.bind(this)}
            >
              Logout
            </AuthenticateButton>
          )
        }

      </NavBar>
    )
  }

}

export default NavigationBar;