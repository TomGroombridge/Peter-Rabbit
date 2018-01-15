import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react'
import history from '../../history';


export default class LandingPage extends Component {

  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 500, padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='NewCo'
              inverted
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em' }}
            />
            <Header
              as='h2'
              content='Find the best odds for you'
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button primary size='huge' onClick={() => { history.push('/offers') }}>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Container>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help You Find The Best Odds</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Here at NewCo we know that you want to get the best offers available from all the major bookies. We are here to help you take your bet that bit further.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Only Do What's Right</Header>
                <p style={{ fontSize: '1.33em' }}>
                 We only do business with bookies we feel are safe and secure, if we don't feel that your money is safe we will not offer you their services.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  alt="show laptop with our offers page on it"
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge' onClick={() => { history.push('/about') }}>Find Out More About Us</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"Great Experience"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"Honest Company"</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Tom Groombridge
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Sign Up Offers</Header>
            <p style={{ fontSize: '1.33em' }}>
              We offer great sign up offers for a wide variety of sports betting companies. No matter what you are looking for you will be able to find it here.
            </p>
            <Button as='a' size='large' onClick={() => { history.push('/offers') }}>View Offers</Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='/'>Offers</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>Enhanced Betting Offers</Header>
            <p style={{ fontSize: '1.33em' }}>
              Different sites have different offers of the day. View them all in one place and decide who your money is going on.
            </p>
            <Button as='a' size='large' onClick={() => { history.push('/offers') }}>View Todays Offers</Button>
          </Container>
        </Segment>

      </div>
    )
  }
}