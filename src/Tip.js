import React from "react";
import "./App.css";

export default function Tip(props) {
  if (props.description === "clear sky") {
    return (
      <span id="tip">
        It's a good day for an outdoor activity{" "}
        <span role="img" aria-label="cartwheel">
          🤸‍♀
        </span>
      </span>
    );
  } else if (props.description.includes("clouds")) {
    return (
      <span id="tip">
        It's a good day for an outdoor activity{" "}
        <span role="img" aria-label="cartwheel">
          🤸‍♀
        </span>
      </span>
    );
  } else if (props.description.includes("rain")) {
    return (
      <span id="tip">
        Don't forget your umbrella{" "}
        <span role="img" aria-label="umbrella">
          ☂
        </span>
      </span>
    );
  } else if (props.description.includes("thunder")) {
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
    return (
      <span id="tip">
        Be careful out there, you can't see clearly{" "}
        <span role="img" aria-label="sad face emoji">
          😟
        </span>
      </span>
    );
  } else {
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
