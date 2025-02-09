"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import gif1 from "~/public/gif_1.gif";
import gif2 from "~/public/gif_2.gif";

const yesText = [
  "Yes",
  "Yes, I will be your Valentine",
  "I'll be very sad if you don't say yes",
  "You're my Valentine! 💖",
];

export default function Home() {
  const [selectedYes, setSelectedYes] = useState(0);
  const [noSize, setNoSize] = useState(100);
  const [hearts, setHearts] = useState<number[]>([]);
  const [gifIndex, setGifIndex] = useState(0);

  const handleNoClick = () => {
    setNoSize((prev) => (prev > 20 ? prev - 20 : prev));
    setSelectedYes((prev) => {
      return (prev + 1) % yesText.length;
    });
  };

  const handleYesClick = () => {
    setHearts((prev) => [...prev, ...Array(10).fill(0)]);
    setSelectedYes(3);
    setGifIndex(1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => prev.slice(1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container relative flex flex-col p-3 pb-0 mx-auto">
      <h1 className="mb-4 text-3xl font-semibold">
        <span className="text-rose-500">Roses are red</span>,{" "}
        <span className="text-violet-500">Violets are fine</span>
      </h1>
      <p className="text-xl text-gray-700">
        Candy is sweet, and so are you. Life feels brighter with everything you
        do. So here&apos;s my question, bold yet true —
        <strong> Will you be my Valentine too?</strong>
      </p>
      <div className="flex mt-12 gap-3">
        <button
          className="bg-green-600 py-2.5 rounded-lg text-green-100 active:scale-95 transition-all duration-300"
          style={{ width: `${noSize}%` }}
          onClick={handleNoClick}
        >
          No
        </button>
        <button
          className="w-full bg-rose-600 p-2.5 rounded-lg text-green-100 active:scale-95 transition-all duration-300 whitespace-nowrap text-ellipsis"
          onClick={handleYesClick}
        >
          {yesText[selectedYes]}
        </button>
      </div>

      <div className="relative w-full h-full max-h-96">
        <div className="flex items-center justify-center">
          <Image
            src={gif1}
            alt="A heart"
            className={`absolute inset-0 transition-opacity duration-500 w-full ${
              gifIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={gif2}
            alt="A heart"
            className={`absolute inset-0 transition-opacity duration-500 w-full ${
              gifIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {hearts.map((_, index) => (
          <HeartIcon key={index} />
        ))}
      </div>
    </main>
  );
}

function HeartIcon() {
  const randomX = Math.random() * 100;
  const randomSize = 20 + Math.random() * 30;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="absolute animate-fall text-rose-500"
      style={{
        left: `${randomX}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }}
    >
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  );
}
