import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react'

class WebNavBar extends Component {

  render(){
    const { isAuthenticated } = this.props.auth;
    return(
      <Container>
        <Menu.Item><Link to={'/'}>Home</Link></Menu.Item>
        <Menu.Item><Link to={'/offers'}>Offers</Link></Menu.Item>
        <Menu.Item><Link to={'/about'}>About</Link></Menu.Item>
        <Menu.Item><Link to={'/faqs'}>FAQ's</Link></Menu.Item>
        <Menu.Item position='right'>
          {!isAuthenticated() && (<Button as='a' inverted onClick={this.props.login}>Log in</Button>) }
          {!isAuthenticated() && (<Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>) }
          {isAuthenticated() && (<Button as='a' inverted onClick={this.props.logout}>Log out</Button>) }
        </Menu.Item>
      </Container>
    );
  }

}

export default WebNavBar;