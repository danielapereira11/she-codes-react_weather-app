import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import main_raining from "./main_raining.svg";
import main_fall from "./main_fall.svg";
import main_snow from "./main_snow.svg";
import Temperature from "./Temperature";

import "./App.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
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
              <h2 id="current-city">{props.weatherResults.currentCity}</h2>
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
            <Temperature celcius={props.weatherResults} />
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
