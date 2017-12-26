import React, { Component } from 'react';
import {
  FilterBarOutline,
  FilterButton
} from './BettingNavigationBar.style.js'


class BettingNavigationBar extends Component {

  render(){
    return(
      <FilterBarOutline>
        <FilterButton>Football</FilterButton>
        <FilterButton>Cricket</FilterButton>
        <FilterButton>Rugby</FilterButton>
        <FilterButton>New Customers</FilterButton>
        <FilterButton>Existsing Customers</FilterButton>
      </FilterBarOutline>
    )
  }

}

export default BettingNavigationBar