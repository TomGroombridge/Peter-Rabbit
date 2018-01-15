import React, { Component } from 'react'
import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

export default class About extends Component {

  render(){
    return(
      <Segment style={{ minHeight: 700, padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header as='h3' style={{ fontSize: '2em' }}>We Leave The Decisions Up To You</Header>
              <p style={{ fontSize: '1.33em' }}>
                Unlike most Affiliate sites we are not here to try and push you towards certain bets by pretending to offer you 'tips', we understand that betting is about having a flutter on your chosen sport and none of us really know if the results is going to land your way or not.
              </p>
              <p style={{ fontSize: '1.33em' }}>
                So... instead of spending our time offering you 'hints' on what do bet on, we'll spend our time building a great experience for you guys to find the best odds for the best you wish to place.
              </p>
              <p style={{ fontSize: '1.33em' }}>
                We'll leave the decision making up to you!
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
              <Image
                bordered
                rounded
                size='large'
                src='/assets/images/wireframe/white-image.png'
              />
            </Grid.Column>
            <Grid.Column floated='right' width={10}>
              <Header as='h3' style={{ fontSize: '2em', textAlign: 'right' }}>How Do We Make Our Money</Header>
              <p style={{ fontSize: '1.33em' }}>
                Here at TBC we want to be 100% transparent with you, therefore it's only right we tell you how we earn our keep.
              </p>
              <p style={{ fontSize: '1.33em' }}>
                Our service is completely free for anyone to use, all you have to do is give us your email address.
              </p>
              <p style={{ fontSize: '1.33em' }}>
                If you decide to place a bet through our site and that bet looses we will earn a small comition from your stake. We understand that some people will think that because we only earn money of you loosing we are going to try to persuade you to bet on very unlikely outcomes, however we will never try to persuade you to bet one way or another.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
