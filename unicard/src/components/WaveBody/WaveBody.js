import React from "react";
import "./waveBody.css";

const WaveBody = () => {
  return (
    <div className="WaveBody">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="bigHeading">NX Wave The next-gen</div>
        <div className="bigHeading">credit card for those who</div>
        <div className="bigHeading">love rewards.</div>
        <div className="smallHeading">
          1% Cashback * 5x RewardsZero * Forex Markup
        </div>
      </div>
      <div>
        <img
          src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
          alt="uncardsImage"
          width={420}
          height={420}
        ></img>
      </div>
    </div>
  );
};

export default WaveBody;
