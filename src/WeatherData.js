import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import main_raining from "./main_raining.svg";
import main_fall from "./main_fall.svg";
import main_snow from "./main_snow.svg";

import "./App.css";

export default function WeatherData(props) {
  return (
    <div className="props.weatherResults">
      <div className="row align-items-center main-row">
        <div className="col">
          <div className="row greeting-row">
            <div className="col greeting">
              <h1>
                <span id="greeting">Good afternoon!</span>
                <br />
                <span id="tip">
                  It's a good day for an outdoor activity{" "}
                  <span role="img" aria-label="cartwheel">
                    🤸‍♀
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h2 id="current-city">{props.city}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-5 align-self-center">
              <div className="today-current-date-time">
                <p>
                  <span id="current-date">Sat, March 26</span>
                  <br />
                  <small>Last updated at </small>
                  <span id="current-time">12:27</span>
                </p>
              </div>
            </div>
            <div className="col-5 col-sm-4 today">
              <span id="today-current-temp">
                <span id="current-temp-value">
                  {props.weatherResults.currentTemp}
                </span>
                <span>
                  <a
                    href="/"
                    id="celcius-link"
                    className="active unit-link temp-unit align-text-top"
                    title="See the temperature in Celcius"
                  >
                    ºC |
                  </a>
                  <a
                    href="/"
                    id="fahrenheit-link"
                    className="not-active unit-link ºF temp-unit align-text-top"
                    title="See the temperature in Fahrenheit"
                  >
                    ºF
                  </a>
                </span>
              </span>
            </div>

            <div className="col-2 col-sm-3 today-min-max-temp">
              <p className="today-max-temp">
                <FontAwesomeIcon
                  icon={faLongArrowAltUp}
                  className="fas fa-long-arrow-alt-up"
                />
                <span id="max-temp">{props.weatherResults.maxTemp}ºC</span>
              </p>
              <p className="today-min-temp">
                <FontAwesomeIcon
                  icon={faLongArrowAltDown}
                  className="fas fa-long-arrow-alt-down"
                />
                <span id="min-temp">{props.weatherResults.minTemp}ºC</span>
              </p>
            </div>
          </div>

          <div className="row justify-content-start today-current-weather">
            <div className="col-md-5 col-sm-6 weather-description align-self-center">
              <p>
                <span id="weather-description">
                  {props.weatherResults.currentWeatherDescription}{" "}
                </span>
                <span>
                  <FontAwesomeIcon icon={faCloud} className="fas fa-cloud" />
                </span>
              </p>
            </div>
            <div className="col align-self-center">
              <p>
                <span className="wind-speed">
                  Wind Speed: {props.weatherResults.windSpeedValue}{" "}
                </span>
                <span id="wind-speed"></span>
                <span>km/h</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-2 imagem-column">
          <div className="row image-row">
            <img
              src={main_raining}
              alt="raining umbrella"
              className="img-fluid"
            />
          </div>
          <div className="row image-row">
            <img
              src={main_fall}
              alt="girl playing with leaves"
              className="img-fluid"
            />
          </div>
          <div className="row image-row">
            <img
              src={main_snow}
              alt="snowman in the sun"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
