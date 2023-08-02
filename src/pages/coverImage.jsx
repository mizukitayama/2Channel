import letters from "../images/letters.png";
import React, { useState, useEffect } from "react";

export const CoverImage = () => {
  const [fadeOutComplete, setFadeOutComplete] = useState(false);
	useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOutComplete(true);
    }, 2900);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className={`absolute inset-0 z-20 ${fadeOutComplete ? "hidden" : ""}`}>
      <div className={`relative h-full min-h-screen w-screen`}>
        <div
          className={`absolute inset-0 bg-black animate-fadeout`}
        ></div>
        <div className="absolute inset-0 h-screen mx-[24px]">
          <img className="absolute m-auto inset-0" src={letters} alt="" />
        </div>
      </div>
    </div>
  );
};
