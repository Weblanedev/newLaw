import React from "react";
import { Link } from "react-router-dom";

import { CgChevronDown } from "react-icons/cg";

// import logo from "../images/cra-transparent.png";
import logo from "../images/logo.jpg";

export default function Header(props) {
  // Open and close mobile nav on clicking button
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const toggleMobileNav = function () {
    setIsMobileOpen(!isMobileOpen);
  };
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = React.useState(false);
  const toggleMobileDropdown = function () {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <header className={`header`}>
      <img src={logo} alt="Next Law Practice logo"></img>

      <nav className={`nav ${isMobileOpen ? "nav--open" : ""}`}>
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <Link
              to="/"
              className="nav__menu-item__link hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="nav__menu-item">
            <Link
              to="/contact"
              className="nav__menu-item__link hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>
          </li>
          {/* <li className="nav__menu-item">
            <Link
              to="/blog"
              className="nav__menu-item__link hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Blog
            </Link>
          </li> */}
          <li className="nav__menu-item">
            <button
              className="nav__menu-item__dropdown-button"
              onClick={toggleMobileDropdown}
            >
              Practice Areas
              <CgChevronDown className="dropdown-button__arrow" />
            </button>

            {/* ------- Dropdown for practice areas ------- */}
            <ul
              className={`nav__dropdown ${isMobileDropdownOpen ? "mobile-dropdown__open" : ""
                }`}
            // onMouseOut={}
            >
              <li>
                <Link
                  className="nav__dropdown-link"
                  to="/intellectual-property"
                  onClick={toggleMobileNav}
                >
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link
                  className="nav__dropdown-link"
                  to="/corporate-law"
                  onClick={toggleMobileNav}
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  className="nav__dropdown-link"
                  to="/real-estate-law"
                  onClick={toggleMobileNav}
                >
                  Real Estate Law
                </Link>
              </li>
              <li>
                <Link
                  className="nav__dropdown-link"
                  to="/litigation-and-dispute-resolution"
                  onClick={toggleMobileNav}
                >
                  Litigation and Dispute
                </Link>
              </li>
              <li>
                <Link
                  className="nav__dropdown-link"
                  to="/regulatory-engagement"
                  onClick={toggleMobileNav}
                >
                  Regulatory Engagement
                </Link>
              </li>
            </ul>
          </li>
          {/* ------- End Dropdown ------- */}
          {/* <li className="nav__menu-item">
            <Link
              to="/team"
              className="nav__menu-item__link hover-underline-animation"
              onClick={() => setIsMobileOpen(false)}
            >
              Team
            </Link>
          </li> */}
        </ul>
      </nav>

      {/* ------- Mobile Navigation ------- */}
      <button
        className="nav__mobile-button"
        aria-label="mobile navigation"
        onClick={toggleMobileNav}
      >
        <div
          className={`nav__mobile-button__hamburger ${isMobileOpen ? "nav__mobile-button__hamburger-open" : ""
            }`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
}
