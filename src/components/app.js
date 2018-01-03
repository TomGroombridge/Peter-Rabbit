import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js'
import BettingCard from './BettingCard/BettingCard.js'
import BettingNavigationBar from './BettingNavigationBar/BettingNavigationBar.js'

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar auth={this.props.auth} />

        <BettingNavigationBar />
        <div style={divStyle}>
          <BettingCard />
          <BettingCard />
          <BettingCard />
          <BettingCard />
          <BettingCard />
          <BettingCard />
        </div>
      </div>
    );
  }
}

export default App;

var divStyle = {
  textAlign: 'center'
};