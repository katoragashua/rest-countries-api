import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header container">
        <h2>Where in the World?</h2>
        <div className="theme">
          <img
            src="./images/dark_mode.svg"
            alt="crescent-moon-logo"
            width="25px"
          />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;