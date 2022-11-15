import React, { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import meta_logo from "../assets/Group (1).png";
import { Link } from "react-router-dom";
import "./navbar.scss";
import ButtonConnect from "../ButtonConnect/ButtonConnect";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const closeNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navigation flex justify-around mt-4 ">
      <div className="logoH">
        <img src={meta_logo} alt="logo" />
      </div>
      <div
        ref={navRef}
        className="navigation_link block items-center sm:flex justify-around gap-28 "
      >
        <div className="link flex justify-between gap-10">
          <Link onClick={closeNavbar} to="/" id="home">
            Home
          </Link>
          <Link onClick={closeNavbar} to="/placestostay" id="Places_to_Stay">
            Places to stay
          </Link>
          <Link onClick={closeNavbar} to="/nfts" id="NFTs">
            NFTs
          </Link>
          <Link onClick={closeNavbar} to="/community" id="community">
            Community
          </Link>
        </div>
        <ButtonConnect onClick={closeNavbar} link={<Link to='/Connectwallet'>Connect wallet</Link>}/>
        <div className="nav-btn" onClick={showNavbar}>
          <FaTimes />
        </div>
      </div>

      <div className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </div>
    </div>
  );
}

export default Navbar;

