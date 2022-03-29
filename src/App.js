import React from "react";
import "./App.css";
import Footer from "./Footer.js";
import MainRow from "./MainRow.js";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <MainRow city="Guimarães" />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
