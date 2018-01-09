import React, { Component } from 'react';
import BettingCard from '../BettingCard/BettingCard.js'
import BettingNavigationBar from '../BettingNavigationBar/BettingNavigationBar.js'
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/items';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading.js'
import {
  Grid,
} from 'semantic-ui-react'

class BettingOffers extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {selected: "football"};
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()){
      this.props.fetchData('http://localhost:5000/bets');
    }
  }

  handler(e, { name }){
    e.preventDefault()
    this.setState({ selected: name })
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { selected } = this.state;
    if (!isAuthenticated()) {
      return <p>Sorry you cannot view this page without being authenticated</p>
    }
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <Loading />;
    }
    return (
      <div style={divStyle}>
        <BettingNavigationBar handler={this.handler} selected={selected}/>
        <div style={{ marginTop: '11.3em'}}>
          <Grid>
          {this.props.items.map((item) => (
              <BettingCard
                sport={item.sport}
                selected={selected}
                key={item.id}
              />
          ))}
          </Grid>
        </div>
      </div>
    );
  }
}

BettingOffers.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BettingOffers);

var divStyle = {
  textAlign: 'center',
  minHeight: '100%'
};