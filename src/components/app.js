import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js'
import BettingCard from './BettingCard/BettingCard.js'

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar auth={this.props.auth} />

        <BettingCard />
        <BettingCard />
        <BettingCard />
        <BettingCard />
      </div>
    );
  }
}

export default App;