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
        <Button
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        ></Button>
        {this.state.change ? (
          <h1>How old are you?</h1>
        ) : (
          <h1>You're this old!</h1>
        )}
      </div>
    );
  }
}

const styledButton = ButtonStyled;

export default Button;
