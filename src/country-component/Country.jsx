import "../App.css";
import "./country-style.css";
import React, { useState } from "react";

const Country = ({ countryList, selectedCountry }) => {
  const [country, setCountry] = useState(countryList);
  const handleChange = (event) => {
    selectedCountry(event.target.value);
  };
  return (
    <div>
      {country.map((ctry, i) => {
        return (
          <div className="countries-item" key={i}>
            <input
              type="radio"
              id={ctry.name}
              name="country"
              value={ctry.name}
              onChange={handleChange}
            />
            <label
              title={ctry.name}
              className="cursor-pointer text-nowrap text-truncate capitalize-text"
              htmlFor={ctry.name}
            >
              {ctry.name}
            </label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Country;
