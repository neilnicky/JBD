"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function FinalWish() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="flex flex-col justify-center items-center my-6">
      {showText ? (
        <p className="text-sm italic mb-4">
          To fall in love was awfully simple, but to fall out of love was simply
          awful.
        </p>
      ) : (
        ""
      )}
      <Image
        alt="withNichu"
        src="/kunju.jpg"
        width={768}
        height={768}
        className="w-32 rounded-2xl"
        onClick={handleClick}
      />
      {/* {showText ? (
        <p className="text-sm italic mt-4 text-center">
          We may no longer be together, but you will forever have a special place
          in my heart.
        </p>
      ) : (
        ""
      )} */}
      <p className="text-gray-200 mt-16 font-medium">
        <span className="text-red-600 font-semibold"> Next Year.</span> Same
        Day.<span className="text-red-600 font-semibold"> Same Place</span>
      </p>
      {/* <p>©2024</p> */}
    </div>
  );
}
