import React from "react";
// import "./images/apple-icon-57.png"
import "../../../src/app.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" rel="noopener noreferrer" href="https://gunfightingyeti.github.io/Assignment3/Bootstrap%20Website/index.html" target="_blank">
        <img className="logo" url="../Logo/apple-icon-57.png" width="50" height="50" alt="Tim Lewis Logo"/>
        </a>
        <h3 className="orange-text">Current Score: <span id="currentScore">0</span></h3>
        <h3 className="orange-text">Highscore: <span id="highScore">0</span></h3>
      <a className="navbar-brand" href="/">
        Remembory
      </a>
    </nav>
  );
}

export default Nav;
