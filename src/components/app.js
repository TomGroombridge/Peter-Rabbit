import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js'

class App extends Component {

  render() {
    return (
      <NavigationBar auth={this.props.auth} />
    );
  }
}

export default App;