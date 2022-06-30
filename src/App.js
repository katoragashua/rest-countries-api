import React from "react";
import useLogic from "./useLogic";
import Header from "./components/Header";
import Main from "./Main";
import {Routes, Route} from "react-router-dom"
import Country from "./components/Country"

function App() {
  const { data, theme, toggleTheme } = useLogic(`https://restcountries.com/v3.1/all`);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main data={data} />} />
        <Route path="/:country_id" element={<Country data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
