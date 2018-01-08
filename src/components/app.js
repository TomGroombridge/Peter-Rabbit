import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js'

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar auth={this.props.auth} />
      </div>
    );
  }
}

export default App;