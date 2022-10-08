import React, { useState } from "react";
import "../Assets/Styles/nav.scss";
import Logo from "../Assets/Images/Logo.webp";
import Logo1 from "../Assets/Images/Logo1.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  const [Navbackground, setNavbackground] = useState(false);
  const [Navtoggle, setNavtoggle] = useState("nav-links1");
  const [display1, setdisplay1] = useState(true);
  const [display2, setdisplay2] = useState(true);

  const Adding = () => {
    setNavtoggle("nav-links1");
    setdisplay1(true);
    setdisplay2(false);
  };

  const Removing = () => {
    setNavtoggle("nav-links2");
    setdisplay1(false);
    setdisplay2(true);
  };

  const changeNavbackground = () => {
    if (window.scrollY >= 80) {
      setNavbackground(true);
    } else {
      setNavbackground(false);
    }
  };
  window.addEventListener("scroll", changeNavbackground);

  return (
    <nav className={Navbackground ? "navcolor" : "navbar"}>
      <div className="wrapper" id={Navbackground ? "line" : "line1"}>
        <div className={Navbackground ? "logo1" : "logo"}>
          <a href="/">
            <img src={Navbackground ? Logo1 : Logo} alt="logo.png" />
          </a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className={Navtoggle}>
          <label htmlFor="close-btn" className="btn close-btn">
            {display1 ? (
              <i onClick={Removing} className="fas fa-times"></i>
            ) : (
              ""
            )}
          </label>

          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              Company
            </a>
          </li>
          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              Products
            </a>
          </li>
          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              About
            </a>
          </li>

          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              Subsidiaries
            </a>
          </li>

          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              Investors
            </a>
          </li>

          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              Careers
            </a>
          </li>

          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              Contact Us
            </a>
          </li>

          <li>
            <a className="link-show-grad" onClick={Removing} href="#">
              CSR
            </a>
          </li>
        </ul>

        <label htmlFor="menu-btn" className="btn menu-btn">
          {display2 ? <i onClick={Adding} className="fas fa-bars"></i> : ":"}
        </label>
        <div className="icon-nav-con">
          <a href="#">
            <FaFacebookF className="iconnav1" color="white" size="1em" />
          </a>

          <a href="#">
            <FaTwitter className="iconnav3" color="white" size="1em" />
          </a>

          <a href="#">
            <FaLinkedinIn className="iconnav5" color="white" size="1em" />
          </a>

          <a>
            <FaYoutube className="iconnav4" color="white" size="1em" />
          </a>

          <a href="#">
            <FaInstagram className="iconnav2" color="white" size="1em" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
