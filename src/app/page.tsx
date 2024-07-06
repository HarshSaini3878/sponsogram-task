"use client";
import Navbar from "@/components/Navbar";
import Circle from "@/components/Circle";
import React from "react";
import TiltedRectangle from "@/components/TiltedRectangle ";
import { Box } from "@chakra-ui/react";
import "./style.css";
export default function Home() {
  return (
    <>
      <div className="max-w-[100vw] h-[600vh] overflow-hidden main">
        <Navbar />
        <TiltedRectangle />
        <Circle size="123px" left="57vw" top="-97rem" position="relative" />

        <div id="section1">
          <div className="content border-lime-300 border-4">
            <div className="content-1 border-red-300 border-4 flex flex- gap-3">
              <div className="text-8xl font-extrabold">Lets Connect Collaborate Sponsor <br /> with Sponsogram</div>
              <div>
                Sponsogram connect provides an effective and powerful way to
                connect sponsors with diverse sponsorship opportunities.
              </div>
              <div><button className="w-20 h-8 bg-green-500">Get Started</button></div>
            </div>
          </div>
          <div className="img"></div>
        </div>
        <div id="section2"></div>
        <div id="section3"></div>
        <div id="section4"></div>
        <div id="section5"></div>
      </div>
    </>
  );
}
