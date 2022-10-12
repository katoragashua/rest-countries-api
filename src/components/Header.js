import React from "react";

const Header = (props) => {

  const {theme, toggleTheme} = props
  

  return (
    <header className={!theme? "light": "dark-elements"}>
      <div className="header container">
        <h2>Where in the World?</h2>
        <div className="theme" onClick={toggleTheme}>
          <img className="theme-logo"
            src={!theme? "./images/moon-light.png": "./images/moon-dark.png"}
            alt="dark/light mode logo"
            width="25px"
          />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;