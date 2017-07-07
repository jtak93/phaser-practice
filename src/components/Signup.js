import React, { Component } from 'react';
import { Grid, Button, Container, Divider, Input } from 'semantic-ui-react'

const SignupMenu = (props) => {
  return (
    <div>
      <Divider hidden />
      <Divider hidden />
      <Container textAlign='center' fluid>
        <h1>Title of Game</h1>
        <h1>Signup</h1>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Input onChange={props.onUsernameChange} placeholder='Username'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Input onChange={props.onEmailChange} placeholder='Email'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Input onChange={props.onPasswordChange} placeholder='Password' type='password'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Input onChange={props.onPasswordConfirmChange} placeholder='Confirm Password' type='password'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <Button
          onClick={props.onSignup}
          content='Signup'/>
      </Container>
      <Divider hidden />
      <Container textAlign='center' fluid>
        <h4>Already have an account?</h4>
      </Container>
      <Container textAlign='center' fluid>
        <Button
          onClick={props.backToLogin}
          content='Go To Login'/>
      </Container>
    </div>
  )
}
export default SignupMenu;
