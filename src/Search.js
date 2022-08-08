import React, { useState } from "react";
import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";
import axios from "axios";

import "./Style.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ ready: false });

  function displayWeather(response) {
    setData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      coordinates: response.data.coord,
      lat: response.data.coord.lat,
  long: response.data.coord.long,
  forecast: response.data.daily,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

function search () {
  let apiKey = "45d865054195f39f1528ab2a051423dd";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}

if (data.ready) {
  return (
    <div className="Search">
      <form className="city-search" onSubmit={handleSubmit}>
        <div>
          <input
            type="search"
            className="form-control enter-city"
            placeholder="Enter a city"
            autoComplete="off"
            autoFocus="off"
            onChange={displayCity}
          />
        </div>
        <div className="button-wrapper">
          <button type="submit">Search</button>
        </div>
      </form>
      <WeatherToday data={data} />
      <Forecast data={data} />
    </div>
  );
}
  else {
    search();
    return "Loading...";
  }
}