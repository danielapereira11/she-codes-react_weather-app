import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function MainRow(props) {
  const apiKey = "7df6c65e200126c6e7cd1b9752957b4c";

  let [weatherResults, setWeatherResults] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function updateWeatherResults(response) {
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

  function search() {
    let searchedLocationApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(searchedLocationApiUrl).then(updateWeatherResults);
  }

  function handleFormSubmition(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showCurrentLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let currentLocationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(currentLocationApiUrl).then(updateWeatherResults);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
  }

  if (weatherResults.ready) {
    return (
      <div>
        <WeatherData weatherResults={weatherResults} />
        <div class="searchForm">
          <form
            className="input-group"
            id="search-form"
            onSubmit={handleFormSubmition}
          >
            <button
              type="button"
              className="input-group-text"
              id="current-location-button"
              title="See current location information"
              onClick={getCurrentLocation}
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
              onChange={handleCityChange}
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
    search();
    return "Loading weather information...";
  }
}
