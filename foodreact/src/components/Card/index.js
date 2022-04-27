import React from "react";
import PropTypes from "prop-types";
import { StyledCard, StyledContent, StyledImage } from "./styles";

const Card = (props) => {
  return (
    <StyledCard href={props.link} {...props}>
      <StyledImage src={props.image} alt="" />
      <StyledContent>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p href={props.link} {...props}></p>
      </StyledContent>
    </StyledCard>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
