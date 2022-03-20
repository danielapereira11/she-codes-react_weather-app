import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function Forecast() {
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
      <div className="col forecast-day">
        <div className="card">
          <div className="card-body">
            <p className="card-title">SUNDAY</p>
            <p className="card-text">
              <FontAwesomeIcon icon={faCloud} className="fas da-cloud" />
            </p>
            <p className="card-text" id="forecast-max">
              12<small>ºC </small>
              <small className="light">| 54ºF</small>
            </p>
            <p className="card-text" id="forecast-min">
              5<small>ºC </small>
              <small className="light">| 41ºF</small>
            </p>
          </div>
        </div>
      </div>

      <div className="col forecast-day">
        <div className="card">
          <div className="card-body">
            <p className="card-title">MONDAY</p>
            <p className="card-text">
              <FontAwesomeIcon
                icon={faCloudRain}
                className="fas fa-cloud-rain"
              />
            </p>
            <p className="card-text" id="forecast-max">
              12<small>ºC </small>
              <small className="light">| 54ºF</small>
            </p>
            <p className="card-text" id="forecast-min">
              5<small>ºC </small>
              <small className="light">| 41ºF</small>
            </p>
          </div>
        </div>
      </div>

      <div className="col forecast-day">
        <div className="card">
          <div className="card-body">
            <p className="card-title">TUESDAY</p>
            <p className="card-text">
              <FontAwesomeIcon icon={faSun} className="fas fa-sun" />
            </p>
            <p className="card-text" id="forecast-max">
              12<small>ºC </small>
              <small className="light">| 54ºF</small>
            </p>
            <p className="card-text" id="forecast-min">
              5<small>ºC </small>
              <small className="light">| 41ºF</small>
            </p>
          </div>
        </div>
      </div>

      <div className="col forecast-day">
        <div className="card">
          <div className="card-body">
            <p className="card-title">WEDNESDAY</p>
            <p className="card-text">
              <FontAwesomeIcon
                icon={faCloudRain}
                className="fas fa-cloud-rain"
              />
            </p>
            <p className="card-text" id="forecast-max">
              12<small>ºC </small>
              <small className="light">| 54ºF</small>
            </p>
            <p className="card-text" id="forecast-min">
              5<small>ºC </small>
              <small className="light">| 41ºF</small>
            </p>
          </div>
        </div>
      </div>

      <div className="col forecast-day">
        <div className="card">
          <div className="card-body">
            <p className="card-title">THURSDAY</p>
            <p className="card-text">
              <FontAwesomeIcon
                icon={faCloudSunRain}
                className="fas fa-cloud-sun-rain"
              />
            </p>
            <p className="card-text" id="forecast-max">
              12<small>ºC </small>
              <small className="light">| 54ºF</small>
            </p>
            <p className="card-text" id="forecast-min">
              5<small>ºC </small>
              <small className="light">| 41ºF</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
