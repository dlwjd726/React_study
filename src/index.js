import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
