import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function Forecast(props) {
  console.log(props.coordinates);
  return (
    <div className="col forecast-day">
      <div className="card">
        <div className="card-body">
          <p className="card-title">SUNDAY</p>
          <p className="card-text">
            <FontAwesomeIcon icon={faCloud} className="fas fa-cloud" />
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
  );
}
