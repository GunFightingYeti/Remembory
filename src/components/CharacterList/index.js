import React from "react";
import '../../app.css';

function ClickyPicture(props) {
  return (
  <button data-key={props.unique} className={props.shake} onClick={props.Check}>
    <div className="card">
      <div className="img-container">
        <img className="char"
          alt={props.name}
          src={props.src}
        />
      </div>
    </div>
  </button>
  );
}

export default ClickyPicture;
