import React from "react";
import "./App.css";
import "./index.css";

export default function Tip(props) {
  if (props.description === "clear sky") {
    document.body.className = "clear-sky";
    return (
      <span id="tip">
        It's a good day for an outdoor activity{" "}
        <span role="img" aria-label="cartwheel">
          🤸‍♀
        </span>
      </span>
    );
  } else if (props.description.includes("clouds")) {
    document.body.className = "clouds";
    return (
      <span id="tip">
        It's a good day for an outdoor activity{" "}
        <span role="img" aria-label="cartwheel">
          🤸‍♀
        </span>
      </span>
    );
  } else if (props.description.includes("rain")) {
    document.body.className = "rain";
    return (
      <span id="tip">
        Don't forget your umbrella{" "}
        <span role="img" aria-label="umbrella">
          ☂
        </span>
      </span>
    );
  } else if (props.description.includes("thunder")) {
    document.body.className = "thunder";
    return (
      <span id="tip">
        <span role="img" aria-label="lightning-bolt">
          ⚡
        </span>{" "}
        Watch out for your electrical appliances{" "}
        <span role="img" aria-label="lightning-bolt">
          ⚡
        </span>
      </span>
    );
  } else if (props.description.includes("snow")) {
    document.body.className = "snow";
    return (
      <span id="tip">
        Is there enough for a snowman?{" "}
        <span role="img" aria-label="snowman">
          ⛄
        </span>
      </span>
    );
  } else if (
    props.description.includes("mist") ||
    props.description.includes("haze")
  ) {
    document.body.className = "mist";
    return (
      <span id="tip">
        Be careful out there, you can't see clearly{" "}
        <span role="img" aria-label="sad face emoji">
          😟
        </span>
      </span>
    );
  } else {
    document.body.className = "else";
    return (
      <span id="tip">
        Have a great day{" "}
        <span role="img" aria-label="hugging emoji">
          🤗
        </span>
      </span>
    );
  }
}
