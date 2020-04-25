import React from 'react';
import './App.css';
import logo from './logo.png'
import { AppBar, Toolbar, IconButton, Typography, Grid, Paper, Container } from '@material-ui/core';
import { Board } from './components/Board';
import { getRandomBoardState } from './logic/Sudoku';

function NavBar() {
  return <AppBar position="relative">
    <Toolbar>
      <IconButton>
        <img src={logo} width="30" height="30" className="App-logo" alt="logo" />
      </IconButton>
      <Typography variant="h6" noWrap>
        Sudoku Solver
    </Typography>
    </Toolbar>
  </AppBar>
}

function Footer() {
  return <footer>
    <Container maxWidth="sm">
      <Typography variant="body1" color="textSecondary">Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Typography>
      <Typography variant="body1" color="textSecondary">Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Typography>
    </Container>
  </footer>
}

function App() {

  let boardState = getRandomBoardState();

  return (
    <React.Fragment>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item md={6} sm={12}>
          <Container>
            <Board state={boardState} />
          </Container>
        </Grid>
        <Grid item md={6} sm={12}>
          <Container>
            <Paper>Solving area</Paper>
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default App;
