import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js'
import BettingCard from './BettingCard/BettingCard.js'
import BettingNavigationBar from './BettingNavigationBar/BettingNavigationBar.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      selected: "football"
    };
  }

  handler(e) {
    e.preventDefault()
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    return (
      <div>
        <NavigationBar auth={this.props.auth} />

        <BettingNavigationBar handler={this.handler} />
        <div style={divStyle}>
          <BettingCard sport={'football'} selected={this.state.selected} />
          <BettingCard sport={'football'} selected={this.state.selected} />
          <BettingCard sport={'football'} selected={this.state.selected} />
          <BettingCard sport={'cricket'} selected={this.state.selected} />
          <BettingCard sport={'cricket'} selected={this.state.selected} />
          <BettingCard sport={'rugby'} selected={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default App;

var divStyle = {
  textAlign: 'center'
};