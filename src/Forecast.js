import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function formatWeekDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let weekDays = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];

    return weekDays[day];
  }

  function getForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div
        className="
            row row-cols-1 row-cols-md-5
            g-3
            align-items-center
            justify-content-evenly
            next-temp
          "
        id="forecast"
      >
        {forecastData.map(function(forecastDay, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="col forecast-day" key={index}>
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      {formatWeekDay(forecastDay.dt)}
                    </p>
                    <p className="card-text">
                      <FontAwesomeIcon
                        icon={faCloud}
                        className="fas fa-cloud"
                      />
                    </p>
                    <p className="card-text" id="forecast-max">
                      {Math.round(forecastDay.temp.max)}
                      <small>ºC </small>
                      <small className="light">
                        | {Math.round(forecastDay.temp.max * 1.8 + 32)}
                        ºF
                      </small>
                    </p>
                    <p className="card-text" id="forecast-min">
                      {Math.round(forecastDay.temp.min)}
                      <small>ºC </small>
                      <small className="light">
                        | {Math.round(forecastDay.temp.min * 1.8 + 32)}
                        ºF
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "7df6c65e200126c6e7cd1b9752957b4c";
    let forecastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&appid=${apiKey}`;
    axios.get(forecastApi).then(getForecast);
    return "Loading forecast data";
  }
}
