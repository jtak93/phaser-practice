import React, { Component } from 'react';
import { Grid, Button, Container, Divider } from 'semantic-ui-react'

const CreateRoomMenu = (props) => {
  return (
    <div>
      <Container fluid>
        <Button onClick={props.onBackToMainMenu} icon='reply' />
      </Container>
      <Divider hidden />
    </div>
  )
}
export default CreateRoomMenu;
