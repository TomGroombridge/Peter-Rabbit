import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js'
import BettingCard from './BettingCard/BettingCard.js'
import BettingNavigationBar from './BettingNavigationBar/BettingNavigationBar.js'

class App extends Component {

  render() {
    return (
      <div style={divStyle}>
        <NavigationBar auth={this.props.auth} />

        <BettingNavigationBar />
        <BettingCard />
        <BettingCard />
        <BettingCard />
        <BettingCard />
      </div>
    );
  }
}

export default App;

var divStyle = {
  textAlign: 'center'
};