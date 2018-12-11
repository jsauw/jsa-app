import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import sponsor from './sponsors.json';
import corporate from './corporate.json';

class Header extends Component {
    render() {
        return (
            <header id="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="m-0 display-3">Welcome to JSA!</h1>
                            <h1 className="m-0">2018-2019</h1>
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
            <div id="about" className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid mt-4" src="./imgs/mission.jpg" alt="" />
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

class MissionJP extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="my-3">活動</h3>
                        <p>私達はオフィサーとメンバーで行われるイベントを通して日本人以外の学生に日本の文化を伝えようと努力をしています。日本の文化を強く強調するだ けではなく、同時に楽しい時 間をすごせるようにしたいと考えています。</p>
                        <br></br>
                        <p>JSAは多種多様なグループであるため、興味がある方はだれでも入会することができます。難しく聞こえるかもしれませんが、JSAは日本人と外国人学生の輪と考えていただければ幸いです。イベントでは英語が苦手な日本人留学生や、日本語を習いたい外国人などが集まってゲームをしたり、料理をもちよったりして会話が弾みます。興味がある方は一度ホームページに記載してあるイベントに顔を出してみてください。きっと楽しい思い出が出来るはずです。</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid mt-4" src="./imgs/missionjp.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

class Events extends Component {
    render() {
        return (
            <div id="events" className="container">
                <h1 className="text-center text-md-left">Events</h1>
                <hr className="mb-5" />

                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="my-4">2018-2019</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="my-4">2017-2018</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="my-4">2016-2017</h2>
                    </div>
                </div>

            </div>
        )
    }
}

class Membership extends Component {
    render() {
        return (
            <div id="membership" className="container">
                <h1 className="text-center text-md-left">Membership</h1>
                <hr className="mb-5" />

                <div className="row">
                    <div className="col-md-6">
                        <h4 className="my-3 text-center text-md-left">Why?</h4>
                        <p className="text-center text-md-left">You get discounts to our events and many stores on the Ave</p>
                        <h4 className="my-3 text-center text-md-left">Cost?</h4>
                        <p className="text-center text-md-left">Only cost $5 for the whole year</p>
                        <h4 className="my-3 text-center text-md-left">Where?</h4>
                        <p className="text-center text-md-left">You can buy them at our booth in Red Square</p>
                    </div>

                    <div className="col-md-6">
                        <img id="jsacard" className="img-fluid mt-4" src="./imgs/jsacard.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

class Sponsor extends Component {
    render() {
        return (
            <div className="container">
                <h1 id="sponsor" className="text-center text-md-left">Sponsors</h1>
                <hr className="mb-5" />
                <SponsorList />
            </div>
        )
    }
}

class SponsorCard extends Component {
    render() {
        let sponsors = this.props.sponsors;
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <h4 className="card-title"><a target="_blank" href={sponsors.link}>{sponsors.name}</a></h4>
                        <p className="card-text">{sponsors.discount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class SponsorList extends Component {
    render() {
        let spon = sponsor.map((r, i) => {
            return (<SponsorCard key={'index: ' + i} sponsors={r} />)
        });
        return (
            <div className="row">
                {spon}
            </div>
        )
    }
}

class Visit extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-md-left">Come Visit Us!</h1>
                <hr className="mb-5" />
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="my-4 text-center">Tabling</h2>
                        <p className="text-center">Come learn more about JSA events at our booth!</p>
                        <p className="text-center mt-3">Mon-Fri, 10:30-2:30pm</p>
                        <p className="text-center mt-3">@ Red Square</p>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="my-4 text-center">Kaiwa Table</h2>
                        <p className="text-center">A friendly environment for English and Japanese-learners to meet and socialize.
Make new friends. Improve your language skills. (Free &amp; both UW/non-UW students are welcome) </p>
                        <p className="text-center mt-3">Every Wednesday, 5:30pm</p>
                        <p className="text-center mt-3">@ HUB Cafeteria</p>
                        <p className="text-center mt-3"> Learn more <a href="https://www.facebook.com/groups/kaiwatableuw/" target="_blank">Here!</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

class Corporate extends Component {
    render() {
        return (
            <div className="container">
                <h1 id="corporate" className="text-center text-md-left">Corporate</h1>
                <hr className="mb-5" />
                <CorporateList />
            </div>
        )
    }
}

class CorporateCard extends Component {
    render() {
        let corporates = this.props.corporates;
        return (
            <div className="col-sm-6">
                <a href={corporates.link} target="_blank"><img className="corpimg" src={corporates.img} width="250" alt="" /></a>
            </div>
        )
    }
}

class CorporateList extends Component {
    render() {
        let corp = corporate.map((r, i) => {
            return (<CorporateCard key={'index: ' + i} corporates={r} />)
        });
        return (
            <div className="row">
                {corp}
            </div>
        )
    }
}

class SocialMedia extends Component {
    render() {
        return (
            <div id="social" className="container">
                <h1 className="text-center text-md-left">Social Media</h1>
                <hr className="mb-5" />
                <div className="row">
                    <div className="col-md-4">
                        <a href="https://www.facebook.com/jsaudub/?ref=profile" target="_blank"><img className="socialimg" src="./imgs/facebook.png" height="150" alt="" /></a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://www.instagram.com/jsauw/?hl=en" target="_blank"><img className="socialimg" src="./imgs/instagram.png" height="150" alt="" /></a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://www.youtube.com/user/jsaOfficers/videos" target="_blank"><img className="socialimg" src="./imgs/youtube.png" height="150" alt="" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

class Credit extends Component {
    render() {
        return (
            <div className="container mt-0">
                <p className="text-center"><strong>Credit:</strong></p>
                <p className="text-center">Rio Ishii</p>
            </div>
        )
    }
}

export { Header, Mission, MissionJP, Events, Membership, Sponsor, Visit, SocialMedia, Corporate, Credit };