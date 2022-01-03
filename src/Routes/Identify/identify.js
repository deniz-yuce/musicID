import React from "react";
import logo from "./Images/MobileLogo2.svg";
import findSong from "./Images/FindSong.svg";
import findGenre from "./Images/FindGenre.svg";
import findMood from "./Images/FindMood.svg";
import { Link } from "react-router-dom";

export default function Identify() {
  return (
    <div className="font-main bg-projWhite h-full md:h-screen md:flex md:flex-col md:justify-between">
      <div className="mb-14 md:mb-0 ">
        <Link to="/">
          <img
            src={logo}
            className="w-2/5 md:w-1/3 xl:w-64 p-3 md:p-5 lg:p-7"
            alt="Logo"
          />
        </Link>
        <div className="grid place-items-center mt-12 md:mt-40">
          <p className="text-black mx-4 font-extrabold text-4xl md:text-5xl text-center">
            What would you like to do?
          </p>
          <div className="md:flex md:mt-24 md:mx-6 xl:gap-24">
            <Link to="/songSearch" className="flex justify-center mt-12">
              <img
                src={findSong}
                className="w-4/6 md:w-5/6 xl:w-full"
                alt="Logo"
              />
            </Link>
            <Link to="/genreSearch" className="flex justify-center mt-12">
              <img
                src={findGenre}
                className="w-4/6 md:w-5/6 xl:w-full"
                alt="Logo"
              />
            </Link>
            <Link to="/moodSearch" className="flex justify-center mt-12">
              <img
                src={findMood}
                className="w-4/6 md:w-5/6 xl:w-full"
                alt="Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black h-12 md:"></div>
    </div>
  );
}
