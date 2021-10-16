import React from "react";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Services = () => {
  return (
    <div className="services-section">
      <div className="title">
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing accross the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="services-cards">
        <div className="card">
          <div className="icon-bkgrnd">
            <img src={brandRecognition} alt="brandRecognition icon" />
          </div>
          <h4 className="card-title">Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="card">
          <div className="icon-bkgrnd">
            <img src={detailedRecords} alt="detailedRecords icon" />
          </div>
          <h4 className="card-title">Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card">
          <div className="icon-bkgrnd">
            <img src={fullyCustomizable} alt="fullyCustomizable icon" />
          </div>
          <h4 className="card-title">Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
