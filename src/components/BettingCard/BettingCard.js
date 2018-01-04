import React, { Component } from 'react';
import {
  CardOutline,
  BettingCompany,
  BettingOfferDescription,
  BettingTag,
  BetEndDate,
  MaxBet,
  BettingPicture
} from './BettingCard.style.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../style.css';

class BettingCard extends Component {

  render() {
    if (this.props.sport === this.props.selected){
      return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <CardOutline>
            <BettingTag>
              New Customers
            </BettingTag>
            <BettingCompany/>
            <BettingPicture />
            <BettingOfferDescription>
              Money back if the either team score in the first half!
            </BettingOfferDescription>
            <BetEndDate>
              10th Jan 5:00pm
            </BetEndDate>
            <MaxBet>
              Max bet: £10.00
            </MaxBet>

          </CardOutline>
        </ReactCSSTransitionGroup>
      )
    } else {
      return (null)
    }
  }
}

export default BettingCard;