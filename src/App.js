import React from "react";
import "./App.css";
import Footer from "./Footer.js";
import MainRow from "./MainRow.js";
import SearchForm from "./SearchForm.js";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <MainRow />
      <SearchForm />
      <hr />
      <h3>How will the weather be for the next couple of days?</h3>
      <Forecast />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
