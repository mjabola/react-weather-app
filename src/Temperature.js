import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState('celsius')

    function switchToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function switchToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === 'celsius') {
    return (
      <div className="Temperature">
        {props.celsius}{" "}
        <sup>
          °C |{" "}
          <a href="/" onClick={switchToFahrenheit}>
            °F
          </a>
        </sup>
      </div>
    );
} else {
    let fahrenheit = (Math.round((props.celsius * 9) / 5 + 32));
    return (
      <div className="Temperature">
        {fahrenheit}{" "}
        <sup>
          <a href="/" onClick={switchToCelsius}>
            °C</a> | °F
        </sup>
      </div>
    );
}
}