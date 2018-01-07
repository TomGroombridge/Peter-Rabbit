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
import footballLogo from '../../Football.svg'

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
            <div style={cardTopNav}>
              <img src={footballLogo} alt={"logo"} className="footballLogo"/>
              <BettingTag>
                New Customers
              </BettingTag>
            </div>
            <div>
              <BettingOfferDescription>
                Money back if the either team score in the first half!
              </BettingOfferDescription>
            </div>
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

var cardTopNav = {
    minHeight: '45px'
}