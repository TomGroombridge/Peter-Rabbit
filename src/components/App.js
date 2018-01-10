import React, { Component } from 'react'
import NavigationBar from './NavigationBar/NavigationBar.js';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.js'
import About from './About/About.js'
import FAQs from './About/FAQs.js'
import BettingOffers from './BettingOffers/BettingOffers.js'
import NavigationFooter from './NavigationFooter/NavigationFooter.js';
import Callback from '../Callback/Callback';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

class App extends Component {

  state = { visible: false }

  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = {visible: false};
  }

  toggleVisibility(){
    this.setState({ visible: !this.state.visible })
  }

  handleAuthentication(nextState, replace) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  }

  SidebarItems(){
    return(
      <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
        <Menu.Item onClick={this.toggleVisibility}>
          Hide Menu
        </Menu.Item>
        <Menu.Item name='home'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='gamepad'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item name='camera'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>
    );
  }

  render(){
    return(
      <div style={divHeight}>
        <Sidebar.Pushable as={Segment}>
          {this.SidebarItems()}
          <Sidebar.Pusher>
            <NavigationBar auth={this.props.auth} toggleVisibility={this.toggleVisibility}/>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/faqs" component={FAQs} />
            <Route exact path="/offers" render={(props) => <BettingOffers auth={this.props.auth} {...props} />} />
            <NavigationFooter />
            <Route path="/callback" render={(props) => {
              this.handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }

}

const divHeight = {
  height: '100%',
  position: 'absolute',
  width: '100%',
}

export default App
