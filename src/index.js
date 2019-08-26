import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on me!";
}

const App = () => {
  const buttonText = "Click Me!";

  return (
    <div>
      <label className="label" for="text">
        Text
      </label>
      <input id="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
