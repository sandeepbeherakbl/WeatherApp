import React, { useState } from "react";

import "../styles/Search.css";

export default function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState("");

  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="Search">
      <div className="location_img">
        <img src="https://cdn-icons.flaticon.com/png/512/3082/premium/3082383.png?token=exp=1655442817~hmac=5465c571e67c9b76ec60604f0d435610" className="location" />
      </div>
      <div className="input_box">
        <input
          className="input"
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="search_img">
        <img
          className="search_btn"
          onClick={handleButtonClick}
          src="https://cdn-icons-png.flaticon.com/512/151/151773.png" />
      </div>
    </div>
  );
}
