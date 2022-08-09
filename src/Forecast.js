import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
    console.log(response.data);
  }

  if (ready) {
    let maxTemp = Math.round(forecastData[0].temp.max);
    let minTemp = Math.round(forecastData[0].temp.min);
    let icon = forecastData[0].weather[0].icon;

    return (
      <div className="Forecast weather-forecast">
        <div className="row">
          <div className="col-2">
            <WeatherIcon code={icon} size={25} />
            <p className="day">Mon</p>
            <p className="temp-forecast">
              <span className="temp-forecast">{maxTemp}°</span>
              <br />
              <span className="min-temp-forecast">{minTemp}°</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "45d865054195f39f1528ab2a051423dd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return "Loading...";
  }
}
