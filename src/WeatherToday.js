import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

import "./Weather.css";

export default function WeatherToday(props) {
    return (
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h3>{props.data.city}</h3>
            <h2>
                <Temperature celsius={props.data.temp} />
            </h2>
          </div>
          <div className="col-6">
              <WeatherIcon
                code={props.data.icon} size={60}
              />
          </div>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>{props.data.description}</li>
                <li className="last-updated">
                  <FormatDate date={props.data.date} />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}