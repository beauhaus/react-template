import React from "react";
import { render } from "react-dom";
import SearchInput from "./SearchInput";
import ImageGallery from "./ImageGallery";

const App = () => {
  return (
    <div>
      <h1>This is App.js</h1>
      <ImageGallery />
      <SearchInput />
    </div>
  );
};

render(<App />, document.getElementById("root"));
