import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import  '../../style.css'


const Loading = () => (
  <div style={fullHeight}>
    <Segment className="loadingOverlay">
      <Dimmer active>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default Loading

const fullHeight = {
  height: '100%',
  minHeight: '800px'
}