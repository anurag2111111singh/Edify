import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import ReactSwitch from "react-switch";
import { AppContext } from "../App";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import DarkCross from "../assets/images/cross-dark.png";
import LightCross from "../assets/images/cross-light.png";
import LightMenu from "../assets/images/menu-light.png";
import DarkMenu from "../assets/images/menu-dark.png";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navopen, setnavopen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/signup" || location.pathname === "/signin") {
      setnavopen(false);
    } else {
      setnavopen(true);
    }
  }, [location.pathname]);

  const { toggleTheme, theme, userData } = useContext(AppContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    setDropdownOpen(false);
    navigate("/");
  };

  console.log(menuOpen);

  return (
    <>
      <div className={navopen ? "navbar" : "navclose"}>
        <div className="navbar-left">
          <div className="hamberger">
            {menuOpen ? (
              <img
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                src={theme === "light" ? LightCross : DarkCross}
                alt=""
              />
            ) : (
              <img
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                src={theme === "light" ? LightMenu : DarkMenu}
                alt=""
              />
            )}
          </div>
          <h2 className="logo-txt">Edify</h2>
          <ul>
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/learn" className="links">
                Learn
              </Link>
            </li>
            <li>
              <Link to="/articles" className="links">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/gethired" className="links">
                Get Hired
              </Link>
            </li>
            <li>
              <Link to="/about" className="links">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ReactSwitch
            className="toggle-button"
            onChange={toggleTheme}
            checked={theme === "dark"}
            onColor="#02A960"
          />
          {userData ? (
            <>
              <button
                className="profile-btn"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                {userData.displayName}
              </button>
              <div
                className={
                  dropdownOpen ? "dropdown-body" : "dropdown-body-close"
                }
              >
                <ul className="dropdown-ul">
                  <li
                    className="dropdown-li"
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </li>
                  <li
                    className="dropdown-li"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button
              className="login-btn"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login / SignUp
            </button>
          )}
          {/* <div className="hamberger">
            {menuOpen ? (
              <img
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                src={theme === "light" ? LightCross : DarkCross}
              />
            ) : (
              <img
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                src={theme === "light" ? LightMenu : DarkMenu}
              />
            )}
          </div> */}
        </div>
      </div>
      <div className={menuOpen ? "nav-menu-down" : "nav-menu-down-close"}>
        <ul>
          <li>
            <Link
              to="/"
              className="links"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/learn"
              className="links"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Learn
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="links"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/gethired"
              className="links"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Get Hired
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="links"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
