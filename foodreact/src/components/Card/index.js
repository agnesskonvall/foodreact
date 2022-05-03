import React from "react";
import PropTypes from "prop-types";
import { CardResult, CardStyled } from "./styles";

function Card({ yourName, age }) {
  const renderRetired = () => {
    if (age >= 60) {
      return <h2>You're old enough to retire!</h2>;
    } else {
      return <h2>You still have a few more years left to sell your soul!</h2>;
    }
  };
  return (
    <div className="card-div">
      <CardStyled>
        <CardResult>
          <h2>{yourName}</h2>
          <h2>{age} years</h2>
        </CardResult>
        {renderRetired()}
      </CardStyled>
    </div>
  );
}

Card.propTypes = {
  yourName: PropTypes.string,
  age: PropTypes.number,
};

export default Card;
