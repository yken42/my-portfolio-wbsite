import { About } from "@/components/About";
import { Introduction } from "@/components/Introduction";
import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <div className="">
      <Introduction />
      <About />
    </div>
  );
}
