import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";

import "./Style.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">How's the Weather?</h1>
      <div className="weather-app">
        <Search />
        <Forecast />
      </div>
      <div className="bottom-container">
        Coded by Margarita Jabola
        <br />
        <a href="mailto:mhjabola@gmail.com">GET IN TOUCH</a>
      </div>
    </div>
  );
}

export default App;
