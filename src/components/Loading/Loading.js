import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
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