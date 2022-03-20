import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/danielapereira11/she-codes-react_weather-app"
          target="_blank"
          rel="noopener noreferrer"
          id="code-link"
        >
          Open-source code
        </a>
        by Daniela Pereira | Hosted on Netlify
      </p>
      <button className="contact-button">
        <a href="mailto:brunadaniela.pereira.27@gmail.com" id="contact-link">
          Contact me
        </a>
      </button>
    </footer>
  );
}
