import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div>
      <h2>Thank you for completing the questions!</h2>
      <Link to="/">Start Again</Link>
    </div>
  );
};

export default ThankYou;
