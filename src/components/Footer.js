import React from "react";
import logo from "../images/logo-white.svg";
import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import ig from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="logo" />
      <div className="clickables">
        <div className="quicklinks">
          <ul className="features">
            <p className="title">Features</p>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          <ul className="resources">
            <p className="title">Resources</p>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <ul className="company">
            <p className="title">Company</p>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social-media">
          <img src={fb} alt="facebook icon" />
          <img src={twitter} alt="twitter icon" />
          <img src={pinterest} alt="pinterest icon" />
          <img src={ig} alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
