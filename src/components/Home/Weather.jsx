import React from "react";

import "../styles/Weather.css";

export default function Current({ weatherInfo, location, date }) {
  return (
    <div className="Weather">
      <div className="Weather__info">
        <ul className="Weather__list">
          <li className="list__temperature">
            {Math.round(weatherInfo.current.temp)}
            <span className="list__temperature-symbol">°C</span>
          </li>
        </ul>
        <img
          className="Weather__icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.current.weather[0].main}
        />
      </div>
    </div>
  );
}
