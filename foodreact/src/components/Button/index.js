// import PropTypes from "prop-types";
import React from "react";
import { ButtonStyled } from "./styles";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      <div>
        <ButtonStyled
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        >
          {this.props.children}
        </ButtonStyled>
      </div>
    );
  }
}

const styledButton = ButtonStyled;

export default Button;
