import React from "react";
import { Link, useParams } from "react-router-dom";

const Country = (props) => {
  const { data, theme } = props;

  const { country_id } = useParams();

  //Get country name
  const country = data.find((cont) => cont.id === country_id); //This finds the exact country
  console.log(country);

  //Get currencies
  const currencyName = Object.keys(country.currencies)[0]; //This gets the first item in the currencies object
  const currencies = country.currencies[currencyName]; //This gets the object that has the currency name

  //Get languages
  const languages = Object.values(country.languages)
    .map((language) => language)
    .join(", "); //This gets the languages

  //Get border countries
  const borderCountries = country.borders
    ? country.borders.map((borderCountry, index) => (
        <span key={index} className={!theme? "light border" : "dark-elements border"}>
          {borderCountry}
        </span>
      ))
    : "None";
  //Get Native name
  const nativeKeys = Object.keys(country.name.nativeName)
  const nativeNames = nativeKeys.map(key => (country.name.nativeName[key].common)).join(", ")

  return (
    <div className="country container">
      <Link to={"/"} className={!theme ? "light back" : "dark-elements back"}>
        ← Back
      </Link>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`}  />
      <div className="country-info">
        <div className="">
          <h3>{country.name.common}</h3>
          <div className="card-data">
            <span className="head-span">Native Name:</span>
            <span>{nativeNames}</span>
          </div>
          <div className="card-data">
            <span className="head-span">Population:</span>
            <span>{country.population}</span>
          </div>
          <div className="card-data">
            <span className="head-span">Region:</span>
            <span>{country.region}</span>
          </div>
          <div className="card-data">
            <span className="head-span">Sub Region:</span>
            <span>{country.subregion}</span>
          </div>
          <div className="card-data">
            <span className="head-span">Capital:</span>
            <span>{country.capital}</span>
          </div>
        </div>

        <div className="further-info">
          <div className="card-data">
            <span className="head-span">Top Level Domain:</span>
            <span>{country.tld}</span>
          </div>
          <div className="card-data">
            <span className="head-span">Currencies:</span>
            <span>{currencies.name}</span>
          </div>
          <div className="card-data">
            <span className="head-span">Languages:</span>
            {languages}
          </div>
        </div>
        <div>
          <div className="card-data border-countries">
            <span className="head-span">Border Countries:</span>
            <div className="border-div">{borderCountries}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
