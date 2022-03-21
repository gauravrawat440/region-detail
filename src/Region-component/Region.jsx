import "../App.css";
import "./region-style.css";
import React, { useState } from "react";

const Region = ({ regionList, selectedRegion }) => {
  const [regionArr, setRegionArr] = useState(regionList);
  const [selectedReg, setSelectedRegion] = useState("");
  const handleChange = (event) => {
    selectedRegion(event.target.value);
    setSelectedRegion(event.target.value);
  };
  return (
    <div>
      {regionArr.map((reg, i) => {
        return (
          <div className="region-item pl-1 pt-0" key={i}>
            <input
              type="radio"
              id={reg}
              name="region"
              value={reg.toLowerCase()}
              onChange={handleChange}
            />
            <label
              title={reg}
              className="region-label cursor-pointer text-nowrap text-truncate capitalize-text"
              htmlFor={reg}
            >
              {reg}
            </label>
            {selectedReg.toLowerCase() === reg.toLowerCase() && (
              <div className="arrow-right"></div>
            )}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Region;
