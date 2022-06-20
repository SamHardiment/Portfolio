import React from "react";

import "./index.css";
import pic1 from "../../images/scottishsam.jpg";
import pic2 from "../../images/headshotsam.jpg";
import pic3 from "../../images/graduatesam.jpg";

export const About = () => {
  return (
    <section className="aboutMe margin-5">
      <div className="aboutMe-Container">
        <div className="gridContainer">
          <div className="aboutMe-Grid">
            <img className="sampic1 sampic" src={pic1} alt="Sam in kilt" />

            <img className="sampic2 sampic" src={pic2} alt="Headshot of Sam" />
            <img className="sampic3 sampic" src={pic3} alt="graduate Sam" />
          </div>
        </div>
        <div className="aboutMe-Text">
          <h4 className="heading--4">Who am I?</h4>
          <div className="underline"></div>
          <div className="text-container">
            <p>
              Hello! I am Sam and I'm a recent graduate from the University of
              Glasgow where I was awarded a 2:1 degree in Chemistry. As a very
              adventurous individual, I love to explore nature, typically
              through athletic means such as hiking.
            </p>
            <p>
              From an early age, I have been obssesed with problem solving,
              wether that has been gaming, bouldering or programming. So much so
              that I have emarked on my next journey; to become a full stacked
              engineer.
            </p>
            <p>
              I have decided to follow a technological journey to not only
              fulfil my problem-solving fix, but to hopefuly help increase the
              quality of life of everbody's day to day life through new tech.
            </p>
            <p>
              It is an important direction for me to add value and help people
              who are at a disadvantage. By pursing a career in technology, I
              believe this is my best route to achieving my goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
