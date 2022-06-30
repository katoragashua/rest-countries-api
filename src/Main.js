import React from "react";
import Card from "./components/Card";

const Main = (props) => {
  const { data } = props;
  const countries = data.map((country) => (
    <Card key={country.id} country={country} />
  ));
  
  return (
    <div className="main container">
      <div className="search">
        <input type="search" name="search" id="search" placeholder="Search" />
        <select name="region" id="region" placeholder="Search by">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="america">America</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="cards-container">{countries}</div>
    </div>
  );
};
export default Main;
