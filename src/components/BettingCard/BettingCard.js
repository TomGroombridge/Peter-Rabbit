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

class BettingCard extends Component {

  render() {
    if (this.props.sport === this.props.selected){
      return (
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
      )
    } else {
      return (
        ""
      )
    }
  }
}

export default BettingCard;