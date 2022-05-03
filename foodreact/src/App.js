import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(value);
    setChange(true);
  };

  const [change, setChange] = useState(false);
  const [state, setState] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const url = `https://api.agify.io/?name=${value}`;

    if (value !== "") {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setState(data);
        });
    }
  }, [value]);

  const result = Object.values(state);
  const addedName = result[0];
  const age = result[1];

  return (
    <div className="App">
      {change ? <h1>You're this old!</h1> : <h1>How old are you?</h1>}
      <h3>Input your name here: </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>

        <Button>Show me my age!</Button>
      </form>
      {result.length > 0 && <Card yourName={addedName} age={age}></Card>}
    </div>
  );
}

export default App;
