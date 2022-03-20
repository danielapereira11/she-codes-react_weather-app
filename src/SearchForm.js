import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function SearchForm() {
  return (
    <form className="input-group" id="search-form">
      <button
        type="button"
        className="input-group-text"
        id="current-location-button"
        title="See current location information"
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="fas fa-map-marker-alt"
        />
      </button>
      <input
        type="search"
        className="form-control"
        id="city-search"
        placeholder=" Search another city ..."
        aria-label="Search input with submit button"
        autoComplete="off"
      />
      <button
        type="submit"
        className="btn search-button"
        id="search-button"
        title="Search"
      >
        <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
      </button>
    </form>
  );
}
