import React from "react";
import "../Assets/Styles/footer.scss";
import Logo from "../Assets/Images/Logo.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="main_footer">
      <div className="top_container">
        <img src={Logo} alt="logo" loading="lazy" />
        <div>
          <a href="mailto:mail@manappuram.com"> mail@manappuram.com</a>
        </div>

        <p>© 2022. All rights reserved @ manappuram Pvt.Ltd</p>
      </div>
      <div className="middle_container">
        <h1>Manappuram Finance Limited</h1>
        <p>
          IV / 470 (old) W638A (New), Manappuram House <br /> Valapad,Thrissur
          <br />
          Kerala, India
          <br />
          Pin code : 680567
          <br />
          <a href="tel:+1800-420-22-33">Tel: 1800-420-22-33</a>
        </p>
      </div>

      <div className="last_container">
        <h1>Get in touch with us</h1>
        <form action="#" method="post">
          <input
            id="placeborder"
            type="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <input type="submit" value="Connect" />
        </form>
        <div className="linkicon-container">
          <a>
            <FaFacebookF size="1em" />
          </a>
          <a>
            <FaInstagram size="1em" />
          </a>
          <a>
            <FaTwitter size="1em" />
          </a>
          <a>
            <FaYoutube size="1em" />
          </a>
          <a>
            <FaLinkedinIn size="1em" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
