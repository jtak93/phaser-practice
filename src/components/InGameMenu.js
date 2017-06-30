import React, { Component } from 'react';
import { Button, Container, Image, Icon, Message } from 'semantic-ui-react'

const InGameMenu = (props) => {
  return (
    <div className='InGameMenu'>
      <Container textAlign='right'>
        <Button
         color='teal'
         icon='content'
         onClick={props.onMenuClick}
        />
      </Container>
      <Message size='massive' hidden={!props.isPaused}>Paused! Press P to Unpause</Message>
    </div>
  )
}
export default InGameMenu;
