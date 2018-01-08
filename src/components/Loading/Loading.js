import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import  '../../style.css'


const Loading = () => (
  <div>
    <Segment className="loadingOverlay">
      <Dimmer active>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default Loading