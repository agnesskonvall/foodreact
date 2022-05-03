import React from "react";
import Button from "../Button";

class Title extends React.Component {
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
        >
          {" "}
        </Button>
        {this.state.change ? (
          <h1>How old are you?</h1>
        ) : (
          <h1>You're this old!</h1>
        )}
      </div>
    );
  }
}

export default Title;
