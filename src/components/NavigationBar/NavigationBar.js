import React, { Component } from 'react';
import {
  Menu,
  Responsive
} from 'semantic-ui-react'
import WebNavBar from './WebNavBar.js'
import MobileNavBar from './MobileNavBar.js'

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

  webNav(){
    return(
      <WebNavBar auth={this.props.auth} login={this.login.bind(this)} logout={this.logout.bind(this)}/>
    );
  }

  mobileNav(){
    return(
      <MobileNavBar toggleVisibility={this.props.toggleVisibility} visible={this.props.visible}/>
    );
  }

  render(){
    return(
      <Menu fixed='top' inverted size='large'>
        <Responsive {...Responsive.onlyMobile} as={this.mobileNav.bind(this)} />
        <Responsive minWidth={Responsive.onlyTablet.minWidth} as={this.webNav.bind(this)} />
      </Menu>

    );
  }

}

export default NavigationBar;