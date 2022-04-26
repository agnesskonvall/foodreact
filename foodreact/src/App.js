import React from "react";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1> {console.log(items)}
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </div>
    );
  }
}

export default App;
