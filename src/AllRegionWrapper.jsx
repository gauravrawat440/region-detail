import "./App.css";
import Region from "./Region-component/Region.jsx";
import Country from "./country-component/Country.jsx";
import CountryDetail from "./country-detail-component/CountryDetail.jsx";
import React, { useState } from "react";
const AllRegionWrapper = () => {
  const [showCountries, setShowCountries] = useState(false);
  const [showCountryDetail, setShowCountryDetail] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(" - ");
  const [selectedCountry, setSelectedCountry] = useState(" - ");
  const [selectedCountryDetail, setSelectedCountryDetail] = useState({});
  const [countryList, setCountryList] = useState([]);
  const getCountries = (region) => {
    setSelectedRegion(region);
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => {
        let countriesArray = data.map((cntry) => {
          return {
            name: cntry?.name?.common ? cntry.name.common : "N/A",
            flag: cntry?.flags?.png ? cntry.flags.png : "N/A",
            alpha3Code: cntry?.altSpellings ? cntry.altSpellings : "N/A",
            capital: cntry?.capital ? cntry.capital : "N/A",
            demonym: cntry?.demonyms?.eng?.m ? cntry.demonyms.eng.m : "N/A",
            currency: cntry?.currencies
              ? Object.keys(cntry.currencies)[0]
              : "N/A",
            population: cntry?.population ? cntry.population : "N/A",
          };
        });
        setShowCountries(true);
        setShowCountryDetail(false);
        setCountryList(countriesArray);
      });
  };
  const handleSelectedRegion = (region) => {
    getCountries(region);
    setSelectedCountry("-");
  };
  const handleSelectedCountry = (country) => {
    setShowCountryDetail(true);
    setSelectedCountry(country);
    let arr = countryList.filter((cntry) => {
      return country === cntry.name;
    });
    setSelectedCountryDetail(arr[0]);
  };
  return (
    <div className="container">
      <div className="region-detail-grid">
        <div className="header-item pt-1 pl-2 rounded-left">
          Select a Region
        </div>
        <div className="header-item pt-1 pl-2 rounded-0">
          {showCountries && <span>Select a Country</span>}
        </div>
        <div className="header-item rounded-right">
          {showCountryDetail && (
            <p>
              <span className="badge badge-secondary light-grey-background ml-2 mt-4 custom-font-size">
                <span className="text-capitalize dark-grey-text font-weight-500">
                  {selectedRegion} /{" "}
                </span>
                <span className="country-color-text font-weight-500">
                  {selectedCountry}
                </span>
              </span>
            </p>
          )}
        </div>
        <div className="item pt-2 mt-1 rounded">
          <Region
            regionList={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
            selectedRegion={handleSelectedRegion}
          />
        </div>

        {showCountries && (
          <div className="item pt-2 mt-1 rounded">
            <Country
              countryList={countryList}
              key={countryList}
              selectedCountry={handleSelectedCountry}
            />
          </div>
        )}

        {showCountryDetail && (
          <div className="item pt-2 mt-1 rounded">
            <CountryDetail detail={selectedCountryDetail} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRegionWrapper;
