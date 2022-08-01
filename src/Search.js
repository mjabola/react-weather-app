import React, { useState } from "react";
import axios from "axios";

import "./Style.css";

export default function Search() {
  let [result, setResult] = useState("");
  let [city, setCity] = useState("");
  let [data, setData] = useState("");

  function displayWeather(response) {
    setData({
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d573e02a83a53078fa38c4d5f190a26a&units=metric`;
  axios.get(url).then(displayWeather);

  function handleSubmit(event) {
    event.preventDefault();
    setResult(
      <div>
        <div className="row">
          <div className="col-6">
            <h3>{city}</h3>
            <h2>
              {data.temp} <sup>°C | °F</sup>
            </h2>
          </div>
          <div className="col-6">
            <img src="rain-icon.png" alt="icon" />
          </div>

          <div className="row">
            <div class="col-6">
              <ul>
                <li id="weather-info"> </li>
                <li className="last-updated">As of Friday, 12:56</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {data.humidity}%</li>
                <li>Wind: {data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function displayCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form className="city-search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control enter-city"
          placeholder="Enter a city"
          autocomplete="off"
          autofocus="off"
          onChange={displayCity}
        />
        <div className="button-wrapper">
          <button type="submit">Search</button>
          <button type="submit">Current Location</button>
        </div>
      </form>
      <div>{result}</div>
    </div>
  );
}
