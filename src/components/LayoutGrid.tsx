"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
// import { cards } from "@/constants";

export function LayoutGridDemo() {
  return (
    <div className="h-screen  w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        “There is no love without forgiveness, and there is no forgiveness
        without love.”
      </p>
      <p className="font-normal text-base text-white">– Bryant H. McGill</p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        “Happily ever after is not a fairy tale. It’s a choice.”
      </p>
      <p className="font-normal text-base text-white">– Fawn Weaver</p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        “A Soul like your is rare to come across.”
      </p>
      <p className="font-normal text-base text-white">– N</p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        “This girl has been through so much and she did not deserve any of this
        pain. I hope and pray that love and happiness surround you for the rest
        of your life.”
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/3.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/4.jpeg",
  },
];
