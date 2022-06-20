import React, { useState, useEffect } from "react";

import ra from "../../images/navigation-forward-arrow-svgrepo-com.svg";
import la from "../../images/navigation-back-arrow-svgrepo-com.svg";

export const Carousel = (props) => {
  // Each image slide contained in children array
  const { children } = props;
  console.log(children);

  // Set the active slide to the first image in children array
  const [activeIndex, setActiveIndex] = useState(0);

  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  // Functionality for Forward Button
  const next = () => {
    if (activeIndex < length - 1) {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  // Functionality for Back Button
  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Remove backwards arrow when activeIndex = 0 */}
        {activeIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            <img src={la} alt="backward arrow" />
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {children}
          </div>
          {/* Remove forwards arrow when activeIndex = last slide in the array */}
          {activeIndex < length - 1 && (
            <button onClick={next} className="right-arrow">
              <img src={ra} alt="forward arrow" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
