import React, { Component } from 'react'
import NavigationBar from './NavigationBar/NavigationBar.js';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.js'
import About from './About/About.js'
import FAQs from './About/FAQs.js'
import BettingOffers from './BettingOffers/BettingOffers.js'
import NavigationFooter from './NavigationFooter/NavigationFooter.js';
import Callback from '../Callback/Callback';

class App extends Component {

  constructor(props) {
    super(props);
  }

  handleAuthentication(nextState, replace) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  }

  render(){
    return(
      <div style={divHeight}>
        <NavigationBar auth={this.props.auth} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faqs" component={FAQs} />
        <Route exact path="/offers" render={(props) => <BettingOffers auth={this.props.auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          this.handleAuthentication(props);
          return <Callback {...props} />
        }}/>
        <NavigationFooter />
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
