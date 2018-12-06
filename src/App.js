import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { HashLink } from 'react-router-hash-link';
import { Homepage } from './Homepage';
import { Officers } from './Officers';
import { Gallery } from './Gallery';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Navigation />
            <Route exact path="/" component={Homepage} />
            <Route path="/officers" component={Officers} />
            <Route path="/gallery" component={Gallery} />
          </React.Fragment>
        </Router>
        <Footer />
      </div>
    );
  }
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="white" light expand="md" className="fixed-top">
        <NavbarBrand tag={Link} to="/">
          <img src="./imgs/jsalogo.png" height="50" width="50" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#">Membership</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#">Sponsors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/officers">Officers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/gallery">Gallery</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>

      </footer>
    )
  }
}

export default App;
