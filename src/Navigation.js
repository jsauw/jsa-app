import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

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
                            <NavLink smooth to="/" className="nav-link change-color nav-button" activeClassName="activeLink">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="/#about" className="nav-link change-color nav-button" activeClassName="activeLink">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="/#events" className="nav-link change-color nav-button" activeClassName="activeLink">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="/#membership" className="nav-link change-color nav-button" activeClassName="activeLink">Membership</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="/#sponsor" className="nav-link change-color nav-button" activeClassName="activeLink">Sponsors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="/#social" className="nav-link change-color nav-button" activeClassName="activeLink">Social</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="/#corporate" className="nav-link change-color nav-button" activeClassName="activeLink">Corporate</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/officers" className="nav-link change-color nav-button" activeClassName="activeLink">Officers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/gallery" className="nav-link change-color nav-button" activeClassName="activeLink">Gallery</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export { Navigation }