import React from "react";
import '../../app.css';

function ClickyPicture(props) {
  return (
  <button className="clickMe" data-clicked="false">
    <div className="card">
      <div className="img-container">
        <img className="char"
          alt={props.name}
          src={props.src}
        />
      </div>
        <h5 className="orange-text">{props.name}</h5>
    </div>
  </button>
  );
}

export default ClickyPicture;
