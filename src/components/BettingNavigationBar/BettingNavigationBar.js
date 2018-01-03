import React, { Component } from 'react';
import {
  FilterBarOutline,
  FilterButton
} from './BettingNavigationBar.style.js'


class BettingNavigationBar extends Component {

  render(){
    return(
      <FilterBarOutline>
        <FilterButton onClick={this.props.handler} value={"football"}>Football</FilterButton>
        <FilterButton onClick={this.props.handler} value={"cricket"}>Cricket</FilterButton>
        <FilterButton onClick={this.props.handler} value={"rugby"}>Rugby</FilterButton>
        <FilterButton>New Customers</FilterButton>
        <FilterButton>Existsing Customers</FilterButton>
      </FilterBarOutline>
    )
  }

}

export default BettingNavigationBar