import React from "react";

export const Carousel = (props) => {
  const { slides } = props;
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div className="carousel-content">{slides}</div>
        </div>
      </div>
    </div>
  );
};
