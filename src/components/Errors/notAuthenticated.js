import React, { Component } from 'react'
import {
  Grid,
  Header,
  Image,
  Segment,
  Button
} from 'semantic-ui-react'

export default class notAuthenticated extends Component {

  login() {
    this.props.auth.login();
  }

  render(){
    return(
      <Segment textAlign='center' style={{ minHeight: 700, padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={16} >
              <Header as='h3' style={{ fontSize: '2em' }}>You need to be signed in to see this page!</Header>
              <p style={{ fontSize: '1.33em' }}>
                This page is only available to signed in users. Don't worry though, it's compeletly free to sign up and all we ask for is an email address.
              </p>
              <Button content='Sign in' primary onClick={this.login.bind(this)}/>
              <Button content='Sign up' color='green' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
