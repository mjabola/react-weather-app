import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast weather-forecast">
      <div className="row">
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
          <p className="day">Mon</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
          <p className="day">Tue</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
          <p className="day">Wed</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
          <p className="day">Thu</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
          <p className="day">Fri</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <WeatherIcon code={props.data.icon} />
          <p className="day">Sat</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
      </div>
    </div>
  );
}
