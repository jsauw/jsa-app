import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

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
          </ul>
        </div>
        <img className="footer-logo" src="./imgs/JSA-logo-footer.png" height="100" alt="logo" />
        <p className="text-center mt-4">© 2019 Japanese Student Association. All Rights Reserved.</p>
      </footer>
    )
  }
}

export { Footer };