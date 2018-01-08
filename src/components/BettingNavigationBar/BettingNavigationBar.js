import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react'


class BettingNavigationBar extends Component {

  render(){
    const { selected } = this.props;
    return(
      <Menu compact icon='labeled' className="subNav" fluid widths={3}>
        <Menu.Item name='football' active={selected === "football"} onClick={this.props.handler}>
          <Icon name='gamepad' />
          Football
        </Menu.Item>

        <Menu.Item name='cricket' active={selected === "cricket"} onClick={this.props.handler}>
          <Icon name='video camera' />
          Cricket
        </Menu.Item>

        <Menu.Item name='rugby' active={selected === "rugby"} onClick={this.props.handler}>
          <Icon name='video play' />
          Rugby
        </Menu.Item>
      </Menu>
    )
  }

}

export default BettingNavigationBar