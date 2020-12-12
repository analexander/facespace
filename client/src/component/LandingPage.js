import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MediaCard from "./media/MediaCard";
import BottomAppBar from './nav/BottomAppBar'
import Header from './HeaderComponent/Header'
import CreateJournal from "./journal/CreateJournal";
import { Grid } from '@material-ui/core';
import PlayerApp from './PlayerComponent/PlayerApp';
import Mood from './MoodComponent/Mood';

class LandingPage extends Component {
  render() {
    return(
      <div>
        <Router>
          <Header/>
          <Grid container spacing={3}>
            <Grid item xs>
              <MediaCard>
              <PlayerApp/>
              </MediaCard>
            </Grid>
            <Grid item xs={8}>
              <CreateJournal/>
              <Mood/>
            </Grid>
          </Grid >
          <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default LandingPage;