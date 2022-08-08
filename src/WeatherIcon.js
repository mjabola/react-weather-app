import React from "react";
import Icon from "./rain-icon.png";

export default function WeatherIcon(props) {
    return (
        <img src={Icon} alt={props.alt} />
    )
}