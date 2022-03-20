import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7df6c65e200126c6e7cd1b9752957b4c&units=metric`;
  let [temperature, setTemperature] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    console.log(response.data);
  }

  if (temperature) {
    return (
      <h1>
        The temperature in {props.city} is {Math.round(temperature)}°C.
      </h1>
    );
  } else {
    axios.get(apiUrl).then(showWeather);
    return <h1>`The temperature in {props.city} is Loading...`.</h1>;
  }
}
