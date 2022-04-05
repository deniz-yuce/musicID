import React from "react";
import logo from "./Images/MobileLogo2.svg";
import arrow from "../Images/arrow_right.svg";
import { Link } from "react-router-dom";

export default function Identify() {
  return (
    <div className="font-main pb-20">
      <div className="">
        <Link to="/">
          <img
            src={logo}
            className="w-2/5 md:w-1/3 xl:w-64 p-3 md:p-5 lg:p-7"
            alt="Logo"
          />
        </Link>

        <div className="text-black my-16 md:my-40 lg:my-16 lg:mx-20 lg:flex lg:flex-row lg:justify-between ">
          <div className="border rounded-xl border-semiBlack drop-shadow-xl mx-8 md:mx-44 lg:mx-4 my-20 lg:h-full lg:w-1/4 flex flex-col items-center justify-between">
            <h3 className="lg:h-44 flex items-center text-3xl md:text-4xl font-extrabold text-center md:mx-7">
              Search for a Song
            </h3>
            <p className="h-28 flex items-center text-lg md:text-2xl font-medium text-center mx-2 md:mx-4 mb-4">
              You can play a song to search
            </p>
            <Link to="/songSearch">
              <button className="bg-main-desktop rounded-lg mb-8 w-28 md:w-32 h-18 lg:h-14 xl:h-12 flex justify-center items-center">
                <div className="flex md:ml-2">
                  <p className="text-projWhite font-bold text-md md:text-xl align-middle mt-0.5 lg:text-2xl xl:text-xl">
                    Search
                  </p>
                  <img src={arrow} className="" alt="arrom" />
                </div>
              </button>
            </Link>
          </div>

          <div className="border rounded-xl border-semiBlack drop-shadow-xl mx-8 md:mx-44 lg:mx-4 my-20 lg:h-full lg:w-1/4 flex flex-col items-center justify-between">
            <h3 className="lg:h-44 flex items-center ext-3xl md:text-4xl font-extrabold text-center md:mx-7">
              Search for a Songs Genre
            </h3>
            <p className="h-28 flex items-center text-lg md:text-2xl font-medium text-center mx-2 md:mx-4 mb-4">
              You can play a song to search for a genre
            </p>
            {/* <Link to="/genreSearch" className="">
              <div class="border-4 border-black hover:border-blue-100 rounded-full h-11 w-11 flex items-center justify-center my-6">
                <i class="right border-solid border-black hover:border-blue-100 border-t-0 border-r-4 border-b-4 border-l-0 inline-block p-1"></i>
              </div>
            </Link> */}
            <Link to="/genreSearch">
              <button className="bg-main-desktop rounded-lg mb-8 w-28 md:w-32 h-18 lg:h-14 xl:h-12 flex justify-center items-center">
                <div className="flex md:ml-2">
                  <p className="text-projWhite font-bold text-md md:text-xl align-middle mt-0.5 lg:text-2xl xl:text-xl">
                    Search
                  </p>
                  <img src={arrow} className="" alt="arrom" />
                </div>
              </button>
            </Link>
          </div>

          <div className="border rounded-xl border-semiBlack drop-shadow-xl mx-8 md:mx-44 lg:mx-4 my-20 lg:h-full lg:w-1/4 flex flex-col items-center justify-between">
            <h3 className="lg:h-44 flex items-center text-3xl md:text-4xl font-extrabold text-center md:mx-7">
              Search for a Songs Mood
            </h3>
            <p className="h-28 flex items-center text-lg md:text-2xl font-medium text-center mx-2 md:mx-4 mb-4">
              You can input the lyrics of the songs search
            </p>
            <Link to="/moodSearch">
              <button className="bg-main-desktop rounded-lg mb-8 w-28 md:w-32 h-18 lg:h-14 xl:h-12 flex justify-center items-center">
                <div className="flex md:ml-2">
                  <p className="text-projWhite font-bold text-md md:text-xl align-middle mt-0.5 lg:text-2xl xl:text-xl">
                    Search
                  </p>
                  <img src={arrow} className="" alt="arrom" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="bg-black h-16"></div> */}
    </div>
  );
}
