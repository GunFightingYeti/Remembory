import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1 className="orange-text">Remembory</h1>
      <h2 className="orange-text">The game of remembering using your memory</h2>
      <br/>
      <h3 className="orange-text">Poke an image to start the game but don't poke the same one twice!</h3> 
    </div>
  );
}

export default Jumbotron;
