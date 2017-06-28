import React, { Component } from 'react';
import { Progress, Button } from 'semantic-ui-react'

const MainMenu = (props) => {
  return (
    <div className='MainMenu'>
      <Button className='MainMenuBtn' onClick={props.onPlayGame}>Play Solo</Button>
      <Button className='MainMenuBtn' onClick={props.onCreateRoom}>Create Room</Button>
      <Button className='MainMenuBtn' onClick={props.onJoinRoom}>Join Room</Button>
    </div>
  )
}
export default MainMenu;
