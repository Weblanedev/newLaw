import React from "react";
import { Link } from "react-router-dom";

// import logo from "../images/cra-transparent.png";
import logo from "../images/logo.jpg";

import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgChevronUp } from "react-icons/cg";

export default function Footer() {
  const [buttonOpen, setButtonOpen] = React.useState({
    hoursButton: false,
    contactButton: false,
    linksButton: false,
  });

  const handleClick = function (e) {
    const button = e.target.classList[0];
    setButtonOpen((prevState) => {
      const newState = {
        ...prevState,
        [button]: !prevState[button],
      };
      console.log(newState);
      return newState;
    });
  };
  return (
    <footer id="footer">
      <div className="footer-logo">
        <img src={logo} alt="CRA immigration logo" />
        <div className="footer-socials">
          <a
            aria-label="facebook"
            href="https://www.facebook.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="social-icon" />
          </a>
          <a
            aria-label="instagram"
            href="https://www.instagram.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            aria-label="twitter"
            href="https://www.twitter.com/craimmigration"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <div className={`hours ${buttonOpen.hoursButton ? "open" : ""}`}>
        <p className="hoursButton footer-title" onClick={handleClick}>
          Hours
          <CgChevronUp className="arrow" />
        </p>
        <div>
          <p>Monday - Friday:</p>
          <p> 8:30am - 5:30pm</p>
          <p>Saturday & Sunday: </p>
          <p>Closed</p>
        </div>
      </div>
      <div className={`contact ${buttonOpen.contactButton ? "open" : ""}`}>
        <p className="contactButton footer-title" onClick={handleClick}>
          Contact
          <CgChevronUp className="arrow" />
        </p>
        <ul>
          <li>
            <a href="tel:+234891082144">
              <MdCall />
              +234-809-108-2144
            </a>
          </li>
          <li>
            <a
              href="/contact"
            >
              <MdLocationPin />
              1 Adedeji Adekola Street, Off Freedom Way, Lekki Phase 1
            </a>
          </li>
          <li>
            <Link to="/contact">
              <MdMail />
              contact@nextlawpractice.com
            </Link>
          </li>
        </ul>
      </div>
      <nav className={`footer-links ${buttonOpen.linksButton ? "open" : ""}`}>
        <p className="linksButton footer-title" onClick={handleClick}>
          Links
          <CgChevronUp className="arrow" />
        </p>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
          {/* <li>
            <Link to="/team">Team</Link>
          </li> */}
        </ul>
      </nav>
      <p className="copy">
        © Next Law Practice. All rights reserved.
      </p>
    </footer>
  );
}
