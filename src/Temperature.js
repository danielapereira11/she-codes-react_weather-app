import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function Temperature(props) {
  let [unit, setUnit] = useState("celcius");

  function changeTempToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function changeTempToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celcius") {
    return (
      <div className="Temperature col-7">
        <div className="row">
          <div className="col-8 col-sm-7 today">
            <span id="today-current-temp">
              <span id="current-temp-value">{props.celcius.currentTemp}</span>
              <span>
                <a
                  href="/"
                  id="celcius-link"
                  className="not-active unit-link temp-unit align-text-top"
                  title="See the temperature in Celcius"
                >
                  ºC |
                </a>
                <a
                  href="/"
                  id="fahrenheit-link"
                  className="active unit-link ºF temp-unit align-text-top"
                  title="See the temperature in Fahrenheit"
                  onClick={changeTempToFahrenheit}
                >
                  ºF
                </a>
              </span>
            </span>
          </div>
          <div className="col-3 col-sm-5 today-min-max-temp">
            <p className="today-max-temp">
              <FontAwesomeIcon
                icon={faLongArrowAltUp}
                className="fas fa-long-arrow-alt-up"
              />
              <span id="max-temp">{props.celcius.maxTemp}ºC</span>
            </p>
            <p className="today-min-temp">
              <FontAwesomeIcon
                icon={faLongArrowAltDown}
                className="fas fa-long-arrow-alt-down"
              />
              <span id="min-temp">{props.celcius.minTemp}ºC</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else if (unit === "fahrenheit") {
    let fahrenheitCurrentTemp = Math.round(
      props.celcius.currentTemp * 1.8 + 32
    );
    let fahrenheitMaxTemp = Math.round(props.celcius.maxTemp * 1.8 + 32);
    let fahrenheitMinTemp = Math.round(props.celcius.minTemp * 1.8 + 32);

    return (
      <div className="Temperature col-7">
        <div className="row">
          <div className="col-8 col-sm-7 today">
            <span id="today-current-temp">
              <span id="current-temp-value">{fahrenheitCurrentTemp}</span>
              <span>
                <a
                  href="/"
                  id="celcius-link"
                  className="active unit-link temp-unit align-text-top"
                  title="See the temperature in Celcius"
                  onClick={changeTempToCelcius}
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
          <div className="col-3 col-sm-5 today-min-max-temp">
            <p className="today-max-temp">
              <FontAwesomeIcon
                icon={faLongArrowAltUp}
                className="fas fa-long-arrow-alt-up"
              />
              <span id="max-temp">{fahrenheitMaxTemp}ºC</span>
            </p>
            <p className="today-min-temp">
              <FontAwesomeIcon
                icon={faLongArrowAltDown}
                className="fas fa-long-arrow-alt-down"
              />
              <span id="min-temp">{fahrenheitMinTemp}ºC</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
