import React from "react";

export const Carousel = (props) => {
  console.log(props);

  const { children } = props;
  console.log(children);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div className="carousel-content">{children}</div>
        </div>
      </div>
    </div>
  );
};
