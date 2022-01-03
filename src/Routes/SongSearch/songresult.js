import React from "react";
import logo from "../Images/Logo.svg";
import findGenre from "./FindGenre.svg";
import findMood from "./FindMood.svg";
import OR from "../Images/OR.svg";
import { Link } from "react-router-dom";

export default function SongResult() {
  return (
    <div className="font-main bg-song h-full md:h-screen flex flex-col justify-between">
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
            <div className="flex flex-col">
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
              <Link
                to="/genreSearch"
                className="mt-6 lg:mt-16 lg:pr-24 flex justify-center"
              >
                <img
                  src={findGenre}
                  className="w-5/6 md:w-2/5 lg:w-4/6"
                  alt="findGenre"
                />
              </Link>
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
              <Link
                to="/moodSearch"
                className="mt-6 lg:mt-16 lg:pr-24 flex justify-center"
              >
                <img
                  src={findMood}
                  className="w-5/6 md:w-2/5 lg:w-4/6"
                  alt="findMood"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-12 mt-16"></div>
    </div>
  );
}
