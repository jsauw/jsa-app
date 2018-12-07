import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
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
import { HashLink as Link } from 'react-router-hash-link';
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
              <Link smooth to="/" className="nav-link change-color nav-button">Home</Link>
            </NavItem>
            <NavItem>
              <Link smooth to="#" className="nav-link change-color nav-button">About</Link>
            </NavItem>
            <NavItem>
              <Link smooth to="#" className="nav-link change-color nav-button">Events</Link>
            </NavItem>
            <NavItem>
              <Link smooth to="#" className="nav-link change-color nav-button">Membership</Link>
            </NavItem>
            <NavItem>
              <Link smooth to="#" className="nav-link change-color nav-button">Sponsors</Link>
            </NavItem>
            <NavItem>
              <Link smooth to="#" className="nav-link change-color nav-button">Social</Link>
            </NavItem>
            <NavItem>
              <Link smooth to="#" className="nav-link change-color nav-button">Corporate</Link>
            </NavItem>
            <NavItem>
              <Link to="/officers" className="nav-link change-color nav-button">Officers</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery" className="nav-link change-color nav-button">Gallery</Link>
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
        <div className="row">
          <div className="col-sm-6">
            <img className="my-3 text-center text-md-left" src="./imgs/jsalogo.png" height="50" width="50" alt="logo" />
          </div>
          <div className="col-sm-6">
            <a href="https://www.facebook.com/jsaudub/?ref=profile" target="_blank"><img className="socialimgft my-3 text-center text-md-left" src="./imgs/facebookft.png" height="50" alt="" /></a>
            <a href="https://www.instagram.com/jsauw/?hl=en" target="_blank"><img className="socialimgft my-3 text-center text-md-left" src="./imgs/instagramft.png" height="50" alt="" /></a>
            <a href="https://www.youtube.com/user/jsaOfficers/videos" target="_blank"><img className="socialimgft my-3 text-center text-md-left" src="./imgs/youtubeft.png" height="50" alt="" /></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default App;
