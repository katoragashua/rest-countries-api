import React from "react";
import {Link} from "react-router-dom"

const Card = (props) => {
  const { country, theme } = props;

  return (
    <div className={!theme ? "card": "card card-dark"}>
      <div className="card-img">
        <Link to={country.id}>
          <img src={country.flags.png} alt="" className="card-flag" />
        </Link>
      </div>

      <div className="card-info">
        <h3>{country.name.official}</h3>
        <div className="card-data">
          <span className="head-span">Population: </span>
          <span>{country.population.toLocaleString()}</span>
        </div>
        <div className="card-data">
          <span className="head-span">Region: </span>
          <span>{country.region}</span>
        </div>
        <div className="card-data">
          <span className="head-span">Capital:</span>
          <span>{country.capital}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
