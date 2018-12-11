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
                <Photographers />
                <FacebookPage />
            </div>
        )
    }
}

class Pic extends Component {
    render() {
        let pics = this.props.pictures;
        return (
            <div className="pic col-lg-3 col-md-4 col-6">
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

class Photographers extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-md-left">Photographers</h1>
                <hr className="mb-5" />
                <div className="row">
                    <div className="col-md-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/core1.jpg" alt="" />
                        <h3>Ken Ito</h3>
                    </div>
                    <div className="col-md-6 text-center mb-4">
                        <img className="rounded-circle img-fluid d-block mx-auto" src="./imgs/core1.jpg" alt="" />
                        <h3>Bradley Kim</h3>
                    </div>
                </div>
            </div>
        )
    }
}

class FacebookPage extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Check out our <a href="https://www.facebook.com/pg/jsaudub/photos/?ref=page_internal">Facebook page</a> for more photos!</h2>
            </div>
        )
    }
}

export { Gallery };