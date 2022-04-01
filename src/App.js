import React from "react";
import "./App.css";
import Footer from "./Footer.js";
import MainRow from "./MainRow.js";

function App() {
  return (
    <div className="App">
      <MainRow city="Guimarães" />
      <br />
      <Footer />
    </div>
  );
}

export default App;
