import React from "react";
import Icon from "./rain-icon.png";

import "./Style.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Brisbane</h3>
            <h2>
              15 <sup>°C | °F</sup>
            </h2>
          </div>
          <div className="col-6">
            <img src={Icon} alt="icon" />
          </div>

          <div class="row">
            <div class="col-6">
              <ul>
                <li id="weather-info"> </li>
                <li className="last-updated">Last updated Friday, 12:56</li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Humidity: 94%</li>
                <li>Wind: 3.6 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
