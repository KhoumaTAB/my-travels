import React from "react";

const Travel = props => (
  <figure>
    <figcaption>
      <h2>{props.destination}</h2>
      <h3>{props.country}</h3>
    </figcaption>
    <img src={props.photo} alt={props.country} />
    <figcaption>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Travel;
