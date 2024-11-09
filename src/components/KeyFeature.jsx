import React from "react";
import "./keyFeatures.css";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import bottomCard from "../assets/images/bottomCard.png";

export function KeyFeature() {
  return (
    <div className="keyFeature">
      <div className="keyContainer">
        <h2>Key Features of Us</h2>
        <p>
          Our Curriculum is designed to provide students with a high quality and
          effectivelearning experience. It features emerging and interactive
          content to keep students engaged and motivated.
        </p>
        <div className="keyCardContainer">
          <div className="keyCard">
            <div className="keyCard-Top">
              <img src={card1} alt="" />
            </div>
            <div className="keyCard-Bottom">
              <img src={bottomCard} alt="" />
            </div>
            <h3>Adaptive Learning</h3>
            <h4>
              Explore personalized learning paths tailored to your skills,
              ensuring effective and engaging education.
            </h4>
          </div>
          <div className="keyCard">
            <div className="keyCard-Top">
              <img src={card2} alt="" />
            </div>
            <div className="keyCard-Bottom">
              <img src={bottomCard} alt="" />
            </div>
            <h3>Tech Updates</h3>
            <h4>
              Stay ahead with real-time tech updates, keeping you informed about
              the latest industry trends.
            </h4>
          </div>
          <div className="keyCard">
            <div className="keyCard-Top">
              <img src={card3} alt="" />
            </div>
            <div className="keyCard-Bottom">
              <img src={bottomCard} alt="" />
            </div>
            <h3>Job Alerts</h3>
            <h4>
              Receive instant job notifications matching your skills, connecting
              you with exciting career opportunities.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
