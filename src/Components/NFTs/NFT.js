import React from "react";
import "./NFT.scss";
import shape from "../assets/Frame 59546.png";
const NFT = () => {
  return (
    <div className="NFT block sm: flex">
      <div className="bnb">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>

        <div className="learn">
          <p>Learn more</p>
        </div>
      </div>

      <div className="bnb_image">
        <img src={shape} alt="shape" />
      </div>
    </div>
  );
};

export default NFT;
