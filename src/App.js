import React from "react";
import useLogic from "./useLogic";
import Header from "./components/Header";
import Main from "./Main";
import {Routes, Route} from "react-router-dom"
import Country from "./components/Country"

function App() {
  const { data, theme, toggleTheme, searchQuery, handleSearch } = useLogic(
    `https://restcountries.com/v3.1/all`
  );

  return (
    <div className={!theme? "light app": "dark app"}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route exact path="/" element={<Main data={data} theme={theme} handleSearch={handleSearch} searchQuery={searchQuery} />} />
        <Route path="/:country_id" element={<Country data={data} theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
