import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.js'
import BettingCard from './BettingCard/BettingCard.js'
import BettingNavigationBar from './BettingNavigationBar/BettingNavigationBar.js'
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      selected: "football"
    };
  }

  componentDidMount() {
    this.props.fetchData('http://localhost:5000/bets');
  }

  handler(e) {
    e.preventDefault()
    this.props.fetchData('http://localhost:5000/bets');
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div style={divStyle}>
        <BettingNavigationBar handler={this.handler} />
        {this.props.items.map((item) => (
          <BettingCard
            sport={item.sport}
            selected={this.state.selected}
            key={item.id}
          />
        ))}
      </div>
    );
    // return (
    //   <div>
    //     {/*<NavigationBar auth={this.props.auth} />*/}

    //     <BettingNavigationBar handler={this.handler} />
    //   </div>
    // );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

var divStyle = {
  textAlign: 'center'
};