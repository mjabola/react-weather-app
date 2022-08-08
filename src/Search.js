import React, { useState } from "react";
import axios from "axios";
import WeatherToday from "./WeatherToday";

import "./Style.css";

export default function Search() {
  let [result, setResult] = useState("");
  let [city, setCity] = useState("");
  let [data, setData] = useState("");

  function displayWeather(response) {
    setData({
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setResult(<WeatherToday data={data} />);
  }

  function displayCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let apiKey = "7bad46c3aca76e0858f4cd7506385850";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);

  return (
    <div className="Search">
      <form className="city-search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control enter-city"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="off"
          onChange={displayCity}
        />
        <div className="button-wrapper">
          <button type="submit">Search</button>
        </div>
      </form>
      <div>{result}</div>
    </div>
  );
}
