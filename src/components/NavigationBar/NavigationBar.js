import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

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
      <Menu fixed='top' inverted size='large'>
        <Container>
          <Menu.Item as='a'><Link to={'/'}>Home</Link></Menu.Item>
          <Menu.Item as='a'><Link to={'/offers'}>Offers</Link></Menu.Item>
          <Menu.Item as='a'><Link to={'/about'}>About</Link></Menu.Item>
          <Menu.Item as='a'></Menu.Item>
          <Menu.Item position='right'>
            {!isAuthenticated() && (<Button as='a' inverted onClick={this.login.bind(this)}>Log in</Button>) }
            {!isAuthenticated() && (<Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>) }
            {isAuthenticated() && (<Button as='a' inverted onClick={this.logout.bind(this)}>Log out</Button>) }
          </Menu.Item>
        </Container>
      </Menu>

    )
  }

}

export default NavigationBar;