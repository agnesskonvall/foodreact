import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Title from "./components/Text";
// import Card from "./components/Card";

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

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, [value]);

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
      {/* <Card yourName={state.name} age={state.age}></Card> */}
      <div>
        <h3>Wow {state.name}!</h3>
        <p>Your age is: {state.age}</p>
      </div>
    </div>
  );
}

export default App;
