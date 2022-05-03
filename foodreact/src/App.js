import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(name);
    setChange(true);
  };

  const [change, setChange] = useState(false);
  const [state, setState] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const url = `https://api.agify.io/?name=${name}`;

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
      <Header></Header>
      {/* {change ? <h1>You're this old!</h1> : <h1>How old are you?</h1>} */}
      <h3>Input your name here: </h3>
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
      {change ? <h2>You're this old!</h2> : <h2>How old are you?</h2>}
      {result.length > 0 && <Card yourName={addedName} age={age}></Card>}
      <Footer></Footer>
    </div>
  );
}

export default App;
