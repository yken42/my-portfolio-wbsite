import React from "react";
import { Navbar } from "./Navbar";
import { Roboto_Slab, Montserrat, Radley } from "next/font/google";
import { ArrowDown } from "lucide-react";
import { BackgroundWord } from "./BackgroundWord";

const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const Introduction: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#FF6666] w-full relative z-0">
      <Navbar />
      <section className="introduction-header flex flex-col items-center justify-center h-screen text-center absolute select-none top-0 w-full">
        <BackgroundWord word="Hello" color="white" />
        <h1 className={`${robotoSlab.className} text-[34px] text-[#3a3a3a]`}>
          I'm Yair Ken.
        </h1>
        <h1
          className={`${montserrat.className} font-black text-[#fff] text-[72px] leading-16`}
        >
          A Freelance <br />
          Fullstack Developer
        </h1>
        <a href="#next-section">
          <ArrowDown
            size={80}
            className="absolute hover:cursor-pointer top-150 animate-bounce"
          />
        </a>
      </section>
    </main>
  );
};
