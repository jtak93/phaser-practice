import React, { Component } from 'react';
import { Grid, Button, Container, Divider, Input } from 'semantic-ui-react'

const LoginMenu = (props) => {
  return (
    <div>
      <Divider hidden />
      <Divider hidden />
      <Container textAlign='center' fluid>
        <h1>Title of Game</h1>
        <h1>Login</h1>
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
          content='Login'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <h4>Don&rsquo;t have an account?</h4>
      </Container>
      <Container textAlign='center' fluid>
        <Button
          onClick={props.onSignup}
          content='Sign Up'/>
      </Container>
    </div>
  )
}
export default LoginMenu;
