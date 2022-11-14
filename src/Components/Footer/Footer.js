import React from "react";
import logo1 from "../assets/Group (2).png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import copy from "../assets/ri_copyright-line.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer1">
      <div className="footer">
        <div className="logo block contact">
          <img src={logo1} alt="logo1" />
          <div className="logo1 flex justify-around">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
          <div className="copy1 flex gap-1">
            <img className="copy" src={copy} alt="copy" />
            <p>2022 Metabnb</p>
          </div>
        </div>

        <div className="contact">
          <h4>Community</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div >
        <div className="contact">
          <h4>Places</h4>
          <p>Castle</p>
          <p>Farms </p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className="contact">
          <h4>About us</h4>
          <p>Road map</p>
          <p>Creators </p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
