import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header id="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="m-0 display-4">Welcome to JSA!</h1>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export { Homepage };