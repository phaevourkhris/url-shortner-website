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
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
          <ul className="resources">
            <p className="title">Resources</p>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className="company">
            <p className="title">Company</p>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
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
