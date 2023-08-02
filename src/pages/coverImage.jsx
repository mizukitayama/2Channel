import letters from "../images/letters.png";
import React, { useEffect, useState } from "react";
import "./coverImage.css";

export const CoverImage = () => {
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeout(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="h-screen w-screen bg-black flex justify-center items-center p-[16px] relative"
      >
        <img className="absolute inset-0 m-auto" src={letters} alt="" />
      </div>
			<div></div>
    </>
  );
};
