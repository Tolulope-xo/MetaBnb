import React from "react";
import './Form.scss'
const Form = () => {
  return (
    <form className="form">
      <input className="input" type="text" placeholder="Search for location" />
      <button className="search">Search</button>
    </form>
  );
};

export default Form;
