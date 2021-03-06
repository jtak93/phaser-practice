import React, { Component } from 'react';
import { Grid, Button, Container, Divider, Input } from 'semantic-ui-react'

const CreateRoomMenu = (props) => {
  return (
    <div>
      <Container fluid>
        <Button
          onClick={props.onBackToMainMenu}
          icon='reply'
          labelPosition='left'
          content='Back To Main Menu'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <h1>Create Your Game Room</h1>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Input onChange={props.onNameChange} placeholder='Name'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Input onChange={props.onPasswordChange} placeholder='Password (optional)'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Button
          onClick={props.onCreateRoom}
          content='Create Game Room'/>
      </Container>
    </div>
  )
}
export default CreateRoomMenu;
