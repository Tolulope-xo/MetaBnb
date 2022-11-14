import React from "react";
import Form from "../Form/Form";
import Foot from "../Foot/Foot";
import image5 from "../assets/Group 4028.png";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="h-fit">
      <div className="hero flex">
        <div className="hero1">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <Form />
        </div>
        <div className="pictures">
            <img className="img5" src={image5} alt="pictures" />
        </div>
      </div>

      <Foot />
    </div>
  );
};

export default Hero;
