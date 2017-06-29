import React, { Component } from 'react';
import { Grid, Button, Container, Image, Divider } from 'semantic-ui-react'

const LevelSelection = (props) => {
  return (
    <div>
      <Container fluid>
        <Button onClick={props.onBackToMainMenu}>
          <Image src='assets/images/back-arrow.png' />
        </Button>
      </Container>
      <Divider hidden />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Button>Level 1</Button>
          </Grid.Column>
          <Grid.Column>
            <Button>Level 2</Button>
          </Grid.Column>
          <Grid.Column>
            <Button>Level 3</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button>Level 4</Button>
          </Grid.Column>
          <Grid.Column>
            <Button>Level 5</Button>
          </Grid.Column>
          <Grid.Column>
            <Button>Level 6</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default LevelSelection;
