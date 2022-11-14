import React from "react";
import "./Placesforcards.scss";
import star from "../assets/Star 2.png";
import setting from '../assets/setting-5.png'
import { Places } from "../Data";

const Placesforcards = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <div className="heading flex justify-around">
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <div className="locate flex justify-around gap-2">
            <p>Location</p>
            <img src={setting} alt="setting"/>
        </div>
      </div>
      </div>
      
      <div className="place1">
        {Places.map((place1, index) => {
          return (
            <div className="Places11" key={place1.id}>
              <img src={place1.src} alt="place" />
              <div className="flex justify-between">
                <div className="lower block">
                  <h2 className="name m-1">{place1.name}</h2>
                  <p>{place1.distance}</p>
                  <div className="star flex justify-between">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                <div className="upper block">
                  <h2 className="m-1">{place1.gb}</h2>
                  <p>{place1.weeks}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Placesforcards;
