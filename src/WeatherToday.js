import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherToday(props) {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
            <h3>{props.data.city}</h3>
            <h2>
              {props.data.temp} <sup>°C | °F</sup>
            </h2>
          </div>
          <div className="col-6">
            <div className="float-left">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <ul>
                <li id="weather-info">{props.data.description}</li>
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