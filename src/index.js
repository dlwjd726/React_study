import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem"
  };

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box" />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
