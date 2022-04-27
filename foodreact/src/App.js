import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(null);

  const save = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const getData = () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${value}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
    .then((
      var string = JSON.stringify(items);
      var parsed = JSON.parse(string);
      console.log(parsed);
    )
     
    );
  };
  // for (const [key, value] of Object.entries(items)) {
  //   console.log(`${key}: ${value}`);
  // }

  // const map = Object.entries(items);

  // var response = JSON.map(items);
  // console.log(response);

  // Object.keys(items).forEach(function (key) {
  //   console.log("Key : " + key + ", Value : " + items[key]);
  // });

  // items.forEach((obj) => {
  //   Object.entries(obj).forEach(([key, value]) => {
  //     console.log(`${key} ${value}`);
  //   });
  //   console.log("-------------------");
  // });

  return (
    <div className="App">
      <h1> Fetch data from an api in react </h1>
      
      <Button value="hummus" onClick={save}>
        Hummus
      </Button>
      <Button value="chocolate" onClick={save}>
        Chocolate
      </Button>
      <Button primary onClick={getData}>
        Get recipes
      </Button>
      <Card></Card>
    </div>
  );
}

export default App;
