import React, { Component } from 'react';
import './App.css';

class Officers extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center text-md-left">Meet the Team!</h1>
                <hr className="mb-5" />
                <Core />
            </div>
        )
    }
}

class Core extends Component {
    render() {
        return (
            <div className="row core">
                <div className="col-lg-12">
                    <h2 className="my-4">Core Team</h2>
                </div>
                <div className="col-lg-4 col-sm-6 text-center mb-4">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/michael2.jpg" alt="" />
                    <h3>Michael Hom</h3>
                    <h5>President</h5>
                    <p>Major: Economics</p>
                    <p>Favorite Japanese Food: Sukiyaki</p>
                </div>
                <div className="col-lg-4 col-sm-6 text-center mb-4">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/nana.jpg" alt="" />
                    <h3>Nana Yamagata</h3>
                    <h5>Treasurer</h5>
                    <p>Major: Mechanical Engineering</p>
                    <p>Favorite Japanese Food: Kakinohasushi</p>
                </div>
                <div className="col-lg-4 col-sm-6 text-center mb-4">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/megumi2.jpg" alt="" />
                    <h3>Megumi Quick</h3>
                    <h5>Secretary/Outreach</h5>
                    <p>Major: International Study</p>
                    <p>Favorite Japanese Food: Udon</p>
                </div>
                <div className="col-lg-4 col-sm-6 text-center mb-4">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/koko.jpg" alt="" />
                    <h3>Kokoro Abe</h3>
                    <h5>Internal</h5>
                    <p>Major: Public Health</p>
                    <p>Favorite Japanese Food: Umeboshi</p>
                </div>
                <div className="col-lg-4 col-sm-6 text-center mb-4">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/tessa.jpg" alt="" />
                    <h3>Tessa Doane</h3>
                    <h5>Cutural</h5>
                    <p>Major: Marketing + Certificate of International Business</p>
                    <p>Favorite Japanese Food: Chawanmushi</p>
                </div>
                <div className="col-lg-4 col-sm-6 text-center mb-4">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/saki2.jpg" alt="" />
                    <h3>Saki Kato</h3>
                    <h5>External</h5>
                    <p>Major: Early Childhood and Family Studies</p>
                    <p>Favorite Japanese Food: Ochazuke</p>
                </div>
                <div className="col-lg-4 col-sm-6 text-center mb-4">
                    <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/erica.jpg" alt="" />
                    <h3>Erica Tan</h3>
                    <h5>Publicity</h5>
                    <p>Major: Sociology</p>
                    <p>Favorite Japanese Food: Curry</p>
                </div>
            </div>
        )
    }
}

export { Officers };