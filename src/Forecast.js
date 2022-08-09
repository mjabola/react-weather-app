import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function displayForecast(response)
  {
console.log(response.data)
  }

        let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
    let apiKey = "45d865054195f39f1528ab2a051423dd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

  return (
    <div className="Forecast weather-forecast">
      <div className="row">
        <div className="col-2">
          <WeatherIcon code="09d" size={25} />
          <p className="day">Mon</p>
          <p className="temp-forecast">
            <span className="temp-forecast">21°</span>
            <br />
            <span className="min-temp-forecast">12°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
