import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo">
            <img src="naga-sandeep.png" alt="😁" height="50px" width="50px" />
          </div>
          <span className="header__logo-name">Naga Sandeep</span>
        </div>

        <div className="hambarger">
          <div className="hamicons" onClick={handleClick}>
            {isMenuOpen ? (
              <img
                id="ham-close"
                className="ham-menu"
                src="ham-menu-close.svg"
                alt="hambarger"
              />
            ) : (
              <img
                id="ham-open"
                className="ham-menu"
                src="ham-menu.svg"
                alt="hambarger"
              />
            )}
          </div>
          {isMenuOpen ? (
            <div className="ham__link-container">
              <ul className="ham__links" onClick={handleClick}>
                <li className="ham__link-wrapper">
                  <Link className="ham__link" to="/#hero">
                    Home
                  </Link>
                </li>
                <li className="ham__link-wrapper">
                  <Link className="ham__link" to="/#about">
                    About
                  </Link>
                </li>
                <li className="ham__link-wrapper">
                  <Link className="ham__link" to="/#projects">
                    Projects
                  </Link>
                </li>
                <li className="ham__link-wrapper">
                  <Link className="ham__link" to="/#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <div className="header__link-container">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link className="header__link" to="/#hero">
                Home
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link className="header__link" to="/#about">
                About
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link className="header__link" to="/#projects">
                Projects
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link className="header__link" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
