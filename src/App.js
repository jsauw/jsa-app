import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import ScrollToTopRoute from './ScrollToTopRoute';

import { Navigation } from './Navigation';
import { Header } from './Homepage';
import { Mission } from './Homepage';
import { MissionJP } from './Homepage';
import { Events } from './Homepage';
import { Membership } from './Homepage';
import { Sponsor } from './Homepage';
import { Visit } from './Homepage';
import { SocialMedia } from './Homepage';
import { Corporate } from './Homepage';
import { Officers } from './Officers';
import { Gallery } from './Gallery';
import { Footer } from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Route exact path="/" render={() => {
            return (
              <main>
                <Header />
                <Mission />
                <MissionJP />
                <Events />
                <Membership />
                <Sponsor />
                <Visit />
                <SocialMedia />
                <Corporate />
              </main>
            );
          }} />
          <ScrollToTopRoute path="/officers" component={Officers} />
          <ScrollToTopRoute path="/gallery" component={Gallery} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
