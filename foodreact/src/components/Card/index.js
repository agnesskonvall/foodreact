import React from "react";
import PropTypes from "prop-types";

function Card({ yourName, age }) {
  const renderRetired = () => {
    if (age > 60) {
      return <h2>You're old enough to retire!</h2>;
    } else {
      return <h2>You still have a few more years left to sell your soul!</h2>;
    }
  };
  console.log(age);
  return (
    <div>
      <div>
        <h2>{yourName}</h2>
        <h3>{age}</h3>
      </div>
      {renderRetired()}
    </div>
  );
}

Card.propTypes = {
  yourName: PropTypes.string,
  age: PropTypes.number,
};

export default Card;
