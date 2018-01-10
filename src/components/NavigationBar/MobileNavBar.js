import React, { Component } from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react'

class MobileNavBar extends Component {

  render(){
    return(
      <Container>
        <Menu.Item onClick={this.props.toggleVisibility}>
          { !this.props.visible && (<Icon name='sidebar' />) }
          { this.props.visible && (<Icon name='remove' />) }
        </Menu.Item>
      </Container>
    );
  }

}

export default MobileNavBar;