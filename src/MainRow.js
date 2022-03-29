import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function MainRow(props) {
  let [weatherResults, setWeatherResults] = useState({ ready: false });

  function showWeather(response) {
    console.log(response.data);
    setWeatherResults({
      ready: true,
      currentCity: response.data.name,
      currentTemp: Math.round(response.data.main.temp),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      currentWeatherDescription: response.data.weather[0].description,
      windSpeedValue: response.data.wind.speed,
    });
  }

  if (weatherResults.ready) {
    return (
      <div>
        <WeatherData city="Guimarães" weatherResults={weatherResults} />
        <div class="searchForm">
          <form className="input-group" id="search-form">
            <button
              type="button"
              className="input-group-text"
              id="current-location-button"
              title="See current location information"
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="fas fa-map-marker-alt"
              />
            </button>
            <input
              type="search"
              className="form-control"
              id="city-search"
              placeholder=" Search another city ..."
              aria-label="Search input with submit button"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn search-button"
              id="search-button"
              title="Search"
            >
              <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    const apiKey = "7df6c65e200126c6e7cd1b9752957b4c";
    let searchedLocationTempApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(searchedLocationTempApiUrl).then(showWeather);

    return "Loading weather information...";
  }
}
