import React from "react";

const Tour = ({ id, name, info, image, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">{price}</div>
        </div>
        <p>{info}</p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
