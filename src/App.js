import React from "react";
import Search from "./Search";

import "./Style.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">How's the Weather?</h1>
      <div className="weather-app">
        <Search defaultCity="Brisbane" />
      </div>
      <div className="bottom-container">
        This project was coded by{" "}
        <strong>
          <a href="https://www.linkedin.com/in/margarita-jabola/ ">
            Margarita Jabola
          </a>
        </strong><br />
        This is open-sourced on{" "}<a href="https://github.com/mjabola/react-weather-app">GitHub</a> and
        hosted on <a href="https://celadon-mooncake-b6ba7b.netlify.app">Netlify</a>
      </div>
    </div>
  );
}

export default App;
