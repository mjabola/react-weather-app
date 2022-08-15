import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
setReady(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
console.log(forecastData);
    return (
      <div className="Forecast weather-forecast">
        <div className="row">
          {forecastData.map(function(dailyForecast, index) {
            if (index < 5) {
                             return (
                               <div className="col" key={index}>
                                 <ForecastDay data={dailyForecast} />
                               </div>
                             );
                           }
          })}

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
