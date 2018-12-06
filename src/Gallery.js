import React, { Component } from 'react';
import './App.css';
import pic from './pics.json';

class Gallery extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="gallery-title display-4 text-center text-md-left">Photo Gallery</h1>
                <hr className="mb-5" />
                <PicList />
                <h1 className="gallery-title display-4 text-center text-md-left">Photographers</h1>
                <hr className="mb-5" />
            </div>
        )
    }
}

class Pic extends Component {
    render() {
        let pics = this.props.pictures;
        return (
            <div class="col-lg-3 col-md-4 col-6">
                <a className="d-block mb-4 h-100">
                    <img className="img-fluid" src={pics.img} alt="" />
                </a>
            </div>
        )
    }
}

class PicList extends Component {
    render() {
        let picture = pic.map((r, i) => {
            return (<Pic key={'index: ' + i} pictures={r} />)
        });
        return (
            <div className="row text-center text-lg-left">
                {picture}
            </div>
        )
    }
}

export { Gallery };