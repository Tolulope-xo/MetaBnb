import React from "react";
import './Cards.scss'
import star from '../assets/Star 2.png'
import {Adventures} from '../Data'

const Cards = () => {
  return (
    <div className="adventure">
      {Adventures.map((adventure, index) => {
        return (
          <div className="adventure1" key={adventure.id}>
            <img src={adventure.src} alt="image"/>
            <div className="flex justify-between">
            <div className="sub block">
            <h2 className="name m-1">{adventure.name}</h2>
            <p>{adventure.distance}</p>
            <div className="star flex justify-between">
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>

            </div>
            </div>
            <div className="sub1 block">
            <h2 className="m-1">{adventure.gb}</h2>
            <p>{adventure.weeks}</p>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
