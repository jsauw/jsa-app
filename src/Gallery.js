import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="gallery-title display-4 text-center text-md-left">Photo Gallery</h1>
                <hr className="mb-5" />
            </div>
        )
    }
}

export { Gallery };