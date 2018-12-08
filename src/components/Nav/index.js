import React from "react";
import "../../app.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" rel="noopener noreferrer" href="https://gunfightingyeti.github.io/Assignment3/Bootstrap%20Website/index.html" target="_blank">
        <img src="/images/apple-icon-57.png" width="50" height="50" alt="Tim Lewis Logo"/>
        </a>
        <h3 className="orange-text"><span id="message">{props.result}</span></h3>
        <h3 className="orange-text">Current Score: {props.score}</h3>
        <h3 className="orange-text">Highscore: {props.highscore}</h3>
        <h2 id="title">Remembory</h2>
    </nav>
  );
}

export default Nav;
