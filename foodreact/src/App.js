import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Title from "./components/Text";
import Card from "./components/Card";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(name);
  };

  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const url = `https://api.agify.io/?name=${name}`;

    if (value != "") {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setState(data);
        });
    }
  }, [value]);

  const result = Object.values(state);

  console.log(result);

  return (
    <div className="App">
      <Title>Input your name here: </Title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <Button>Show me my age!</Button>
      </form>
      {result.length > 0 && <Card yourName={result[0]} age={result[1]}></Card>}
    </div>
  );
}

export default App;
