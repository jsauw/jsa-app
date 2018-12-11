import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
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
              <NavLink smooth to="/" className="nav-link change-color nav-button">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth to="#" className="nav-link change-color nav-button">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth to="#" className="nav-link change-color nav-button">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth to="#" className="nav-link change-color nav-button">Membership</NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth to="#" className="nav-link change-color nav-button">Sponsors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth to="#" className="nav-link change-color nav-button">Social</NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth to="#" className="nav-link change-color nav-button">Corporate</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/officers" className="nav-link change-color nav-button">Officers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/gallery" className="nav-link change-color nav-button">Gallery</NavLink>
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
        <div className="footer col-md-12 text-center">
          <ul className="social-network social-circle">
            <li><a href="mailto:jsa@uw.edu" className="icoMail" title="Mail"><i className="fa fa-envelope"></i></a></li>
            <li><a href="https://www.facebook.com/jsaudub/?ref=profile" className="icoFacebook" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/jsauw/?hl=en" className="icoInstagram" target="_blank" title="Instagram"><i className="fa fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com/user/jsaOfficers/videos" className="icoYouTube" target="_blank" title="YouTube"><i className="fa fa-youtube"></i></a></li>
            <li><a href="https://www.linkedin.com/company/japanese-student-association-uw-seattle/about/" className="icoLinkedin" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <img className="footer-logo" src="./imgs/JSA-logo-footer.png" height="100" alt="logo" />
        <p className="text-center mt-4">© 2019 Japanese Student Association. All Rights Reserved.</p>
      </footer>
    )
  }
}

export default App;
