import React from "react";
import heroImage from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          onClick={() => {
            window.scrollTo({
              top: 500,
              behavior: "smooth",
            });
          }}
        >
          Get Started
        </button>
      </div>
      <img src={heroImage} alt="illustration working" />
    </div>
  );
};

export default Hero;
