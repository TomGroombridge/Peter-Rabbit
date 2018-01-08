import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
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
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
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