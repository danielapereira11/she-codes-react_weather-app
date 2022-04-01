import React from "react";
import "./App.css";

export default function Greeting(props) {
  if (props.hours < 10) return <span id="greeting">Good morning!</span>;
  else if (props.hours < 20) return <span id="greeting">Good afternoon!</span>;
  else return <span id="greeting">Good evening!</span>;
}
