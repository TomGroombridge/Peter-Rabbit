import React, { Component } from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class NavigationFooter extends Component {

  render(){
    return(
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a' href={'/about'}>Who are we</List.Item>
                  <List.Item as='a' href={'/faqs'}>FAQ's</List.Item>
                  <List.Item as='a' href={'/contact'}>Contact us</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Join Us' />
                <List link inverted>
                  <List.Item as='a'>Facebook</List.Item>
                  <List.Item as='a'>Twitter</List.Item>
                  <List.Item as='a'>Instagram</List.Item>
                  <List.Item as='a'>Snapchat</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>Need Something?</Header>
                <p>If you have any questions or see something you don't think is right then please get in contact us.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }

}

export default NavigationFooter;