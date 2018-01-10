import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react'

class MobileNavBar extends Component {

  render(){
    return(
      <Container>
        <Menu.Item onClick={this.props.toggleVisibility}>Show Sidenav</Menu.Item>
      </Container>
    );
  }

}

export default MobileNavBar;