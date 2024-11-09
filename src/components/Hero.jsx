import React from "react";
import "./hero.css";
import Coding from "../assets/images/code-typing.png";
export function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          <span className="green-gradient">Transforming</span> Graduates{" "}
          <br></br> into <span className="yellow-gradient">Professionals</span>
        </h2>
        <h5>
          Unlocking Career Potential with GeekGrid: Your Source for Expert
          Guidance, Skill Mastery, and Pathway to Success.
        </h5>
        <buttons className="left-buttons">
          <button className="about-button">About Us</button>
          <button className="started-button">Get Started</button>
        </buttons>
      </div>
      <div className="hero-right">
        <img src={Coding} alt=""></img>
      </div>
    </div>
  );
}
