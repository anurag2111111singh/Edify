import React from "react";
import { Hero } from "../../components/Hero";
// import { Topbanner } from "../../components/Topbanner";
import { KeyFeature } from "../../components/KeyFeature";
import Accordian from "../../components/Accordian";
export function Home() {
  return (
    <div>
      <Hero />
      <KeyFeature />
      <Accordian />
    </div>
  );
}
