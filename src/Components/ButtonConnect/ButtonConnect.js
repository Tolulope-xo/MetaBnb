import React, { useState } from "react";
import ConnectWallet from "../../Pages/ConnectWallet/ConnectWallet";
import "./ButtonConnect.scss";
const ButtonConnect = () => {
  const [modalShow, setModalShow] = useState(false);
  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <div>
      <div>
        <button onClick={toggleModal} className="button">
          Connect wallet{" "}
          {modalShow && <ConnectWallet closeModal={setModalShow} />}
        </button>
      </div>
    </div>
  );
};

export default ButtonConnect;
