import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(null);

  const save = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const getData = () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}?ingredients=${value}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);

        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  };

  return (
    <div className="App">
      <h1> Fetch data from an api in react </h1> {console.log(items)}
      <Button value="hummus" onClick={save}>
        Hummus
      </Button>
      <Button value="chocolate" onClick={save}>
        Chocolate
      </Button>
      <Button primary onClick={getData}>
        Get recipes
      </Button>
    </div>
  );
}

export default App;
