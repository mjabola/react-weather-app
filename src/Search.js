import React from "react";

import "./Style.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="city-search" id="search-city">
        <input
          type="text"
          className="form-control enter-city"
          id="new-city"
          placeholder="Enter a city"
          autocomplete="off"
          autofocus="off"
        />
        <div className="button-wrapper">
          <button type="submit" id="lets-go">
            Let's go
          </button>
          <button type="submit" id="current-location">
            Current Location
          </button>
        </div>
      </form>
    </div>
  );
}
