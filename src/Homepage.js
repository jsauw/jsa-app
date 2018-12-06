import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Mission />
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

class Mission extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid" src="./imgs/mission.jpg" alt="" />
                    </div>

                    <div className="col-lg-6">
                        <h3 className="my-3">Our Mission</h3>
                        <p>Our goal is to spread the Japanese culture to students in a fun and informative environment. We offer many cultural events and social gatherings throughout the year.  </p>
                        <br></br>
                        <p>We encourage all students to join JSA as we are a very open and diverse group. This association is driven by the energy of its members, and we welcome their ideas and comments to further make this club more enjoyable. We have a strong executive board more than willing to listen to the input of its members and to maximize their enjoyment and participation with JSA. </p>
                    </div>

                </div>
            </div>
        )
    }
}

export { Homepage };