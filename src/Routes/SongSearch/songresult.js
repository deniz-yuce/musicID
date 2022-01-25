import React from "react";
import logo from "../Images/Logo.svg";
import findGenre from "./FindGenre.svg";
import findMood from "./FindMood.svg";
import OR from "../Images/OR.svg";
import { Link } from "react-router-dom";

export default function SongResult() {
  return (
    <div className="font-main bg-white">
      <div>
        <Link to="/">
          <img
            src={logo}
            className="w-2/5 md:w-1/3 xl:w-64 p-3 md:p-5 lg:p-7"
            alt="Logo"
          />
        </Link>
        <div className="mx-12 md:mx-24 xl:mx-80 mt-16 lg:mt-32 xl:mt-24">
          <div className="flex flex-col mb-12 lg:mb-24 xl:mb-36">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl">
              Found song:
            </p>
            <p
              id="foundSong"
              className="font-extrabold text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-10"
            >
              Artist - Song Name
            </p>
          </div>
          <div className="lg:flex lg:justify-between xl:mx-12">
            <div className="flex flex-col lg:mr-24">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                Songs genre:
              </p>
              <p
                id="songGenre"
                className="font-extrabold text-xl md:text-2xl lg:text-3xl mt-4 lg:mt-10"
              >
                Genre
              </p>
              <img
                src={OR}
                className="w-1/2 md:w-1/4 lg:w-1/3 mt-2 lg:mt-6"
                alt="or"
              />
              <p className="mt-3 lg:mt-7 md:text-lg lg:text-xl lg:pr-24">
                You can find its genre by using our methods:
              </p>
              <div className="flex">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mt-8">
                  Search for a Songs Genre:
                </h3>
                <Link to="/genreSearch" className="ml-2 mt-1">
                  <div class="border-4 border-black hover:border-blue-100 rounded-full h-9 w-9 flex items-center justify-center my-6">
                    <i class="right border-solid border-black hover:border-blue-100 border-t-0 border-r-4 border-b-4 border-l-0 inline-block p-1"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col mt-8 lg:mt-0">
              <p className="font-semibold text-lg md:text-xl md:w-2/5">
                Songs mood:
              </p>
              <p
                id="songMood"
                className="font-extrabold text-xl md:text-2xl lg:text-3xl mt-4 lg:mt-10"
              >
                Mood
              </p>
              <img
                src={OR}
                className="w-1/2 md:w-1/4 lg:w-1/3 mt-2 lg:mt-6"
                alt="or"
              />
              <p className="mt-3 lg:mt-7 md:text-lg lg:text-xl lg:pr-24">
                You can find its mood by using our methods:
              </p>
              <div className="flex">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mt-8">
                  Search for a Songs Genre:
                </h3>
                <Link to="/moodSearch" className="ml-2 mt-1">
                  <div class="border-4 border-black hover:border-green rounded-full h-9 w-9 flex items-center justify-center my-6">
                    <i class="right border-solid border-black hover:border-green border-t-0 border-r-4 border-b-4 border-l-0 inline-block p-1"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-12 mt-24"></div>
    </div>
  );
}
