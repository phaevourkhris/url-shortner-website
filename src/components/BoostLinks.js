import React from "react";

const BoostLinks = () => {
  return (
    <div className="boostLinks-div">
      <h3>Boost your links today</h3>
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
  );
};

export default BoostLinks;
