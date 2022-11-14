import React from "react";
import cancel from "../../Components/assets/x.png";
import vector from "../../Components/assets/Vector.png";
import mask from "../../Components/assets/image 66.png";
import wallet from "../../Components/assets/image 69.png";

import "./ConnectWallet.scss";

const ConnectWallet = ({toggleModal}) => {
 
  return (
    <div  onClick={toggleModal} className="connection clicked">
      <div className="connect">
        <div className="connect1 flex justify-between">
          <h2>Connect Wallet</h2>
          <img
            onClick={toggleModal}
            className="cancel"
            src={cancel} 
            alt="cancel"
          />
        </div>
        <hr />
        <div className="connect_heading">
          <p className="first_heading">Choose your preferred wallet:</p>
          <div className="head flex items-center justify-between">
            <div className="second_heading flex items-center gap-4">
              <img className="w-8" src={mask} alt="mask" />
              <p>Metamask</p>
            </div>

            <img className="w-2" src={vector} alt="vector" />
          </div>
          <div className="head flex items-center justify-between">
            <div className="second_heading flex items-center gap-4">
              <img className="w-8" src={wallet} alt="wallet" />
              <p>WalletConnect</p>
            </div>

            <img className="w-2" src={vector} alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
