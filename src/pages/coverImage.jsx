import letters from "../images/letters.png";
import React, { useState, useEffect } from "react";
import "./coverImage.css";

export const CoverImage = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [fadeOutComplete, setFadeOutComplete] = useState(false);
	useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOutComplete(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setIsShowing(false);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`absolute inset-0 z-20 ${fadeOutComplete ? "hidden" : ""}`}>
      <div className={`relative h-full w-screen`}>
        <div
          className={`absolute inset-0 bg-black ${
            isShowing ? "animate-fadeout" : ""
          }`}
        ></div>
        <div className="absolute inset-0 h-screen mx-[24px]">
          <img className="absolute m-auto inset-0" src={letters} alt="" />
        </div>
      </div>
    </div>
  );
};
