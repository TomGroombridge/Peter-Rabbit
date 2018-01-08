import React, { Component } from 'react';
import {
  CardOutline,
  BettingOfferDescription,
  BettingTag,
  BetEndDate,
  MaxBet,
} from './BettingCard.style.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../style.css';
import footballLogo from '../../Football.svg'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import WilliamHillLogo from '../../style/WilliamHill.png'

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
          <Modal trigger={
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
            </CardOutline>}>
              {/*this is the modal part of the card*/}
              <Modal.Header>Bet in Detail</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src={WilliamHillLogo} />
                <Modal.Description>
                  <Header>Money back if the either team score in the first half!</Header>
                  <p>We've found the following gravatar image associated with your e-mail address.</p>
                  <p>Is it okay to use this photo?</p>
                  <p>Is it okay to use this photo?</p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  Place Bet <Icon name='right chevron' />
                </Button>
              </Modal.Actions>
          </Modal>
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