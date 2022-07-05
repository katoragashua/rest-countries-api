import React from "react";
import Card from "./components/Card";

const Main = (props) => {
  const { data, theme,  searchQuery, handleSearch, handleFilter} = props;
  console.log(searchQuery)
  const countries = data.map((country) => (
    <Card key={country.id} country={country} theme={theme}/>
  ));
  
  return (
    <div className="main container">
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery.search}
          className={!theme ? "light" : "dark-inputs"}
        />
        <select
          name="region"
          id="region"
          value={searchQuery.region}
          onChange={handleFilter}
          className={!theme ? "light" : "dark-inputs"}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="americas">America</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="cards-container">{countries}</div>
    </div>
  );
};
export default Main;
