import React from "react";
import Icon from "./rain-icon.png";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast weather-forecast">
      <div className="row">
        <div className="col-2">
          <img src={Icon} alt="icon" />
          <p className="day">Mon</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <img src={Icon} alt="icon" />
          <p className="day">Tue</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <img src={Icon} alt="icon" />
          <p className="day">Wed</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <img src={Icon} alt="icon" />
          <p className="day">Thu</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <img src={Icon} alt="icon" />
          <p className="day">Fri</p>
          <p className="temp-forecast">
            21°
            <br />
            12°
          </p>
        </div>
        <div className="col-2">
          <img src={Icon} alt="icon" />
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
