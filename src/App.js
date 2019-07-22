import React from "react";
import { render } from "react-dom";
import SearchInput from "./SearchInput";

const App = () => {
  return (
    <div>
      <h1>This is App.js</h1>
      <SearchInput />
    </div>
  );
};

render(<App />, document.getElementById("root"));
