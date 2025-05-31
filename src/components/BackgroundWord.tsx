import React from "react";
import { Radley } from "next/font/google";

interface BackgroundWordProps {
  word: string;
  color: string;
}

const radley = Radley({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
  variable: "--font-radley",
});

export const BackgroundWord: React.FC<BackgroundWordProps> = ({word, color}) => {
  // Ensure the word and color are valid strings
  return (
    <h1
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 text-6xl opacity-5 ${radley.className} text-left w-full text-[46vw] text-${color} leading-none `}
    >
      {word}
    </h1>
  );
};
