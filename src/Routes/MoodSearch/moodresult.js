import React from "react";
import logo from "../Images/Logo.svg";
import OR from "../Images/OR.svg";
import arrow from "../Images/arrow_right.svg";
import { Link } from "react-router-dom";

export default function SongResult() {
  return (
    <div className="font-main bg-projWhite">
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
            <p className="underline text-lg md:text-xl lg:text-2xl">
              Songs mood:
            </p>
            <p
              id="foundMood"
              className="font-extrabold text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-10"
            >
              Mood
            </p>
          </div>
          <div className="lg:flex lg:justify-between xl:mx-12">
            <div className="flex flex-col lg:mr-24">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                Songs name:
              </p>
              <p
                id="songName"
                className="font-bold text-xl md:text-2xl lg:text-3xl mt-4 lg:mt-10"
              >
                Name
              </p>
              <img
                src={OR}
                className="w-1/2 md:w-1/4 lg:w-1/3 mt-2 lg:mt-6"
                alt="or"
              />
              <p className="mt-3 lg:mt-7 md:text-lg lg:text-xl lg:pr-24">
                You can the song using our methods:
              </p>
              <div className="">
                <h3 className="text-lg md:text-xl lg:text-2xl my-8">
                  Search for a Song:
                </h3>
                <Link to="/genreSearch">
                  <button className="bg-main-desktop rounded-lg mb-8 w-28 md:w-32 h-18 lg:h-14 xl:h-12 flex justify-center items-center drop-shadow-xl">
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
            <div className="flex flex-col mt-8 lg:mt-0">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                Songs genre:
              </p>
              <p
                id="songGenre"
                className="font-bold text-xl md:text-2xl lg:text-3xl mt-4 lg:mt-10"
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
              <div className="">
                <h3 className="text-lg md:text-xl lg:text-2xl my-8">
                  Search for a Songs Genre:
                </h3>
                <Link to="/genreSearch">
                  <button className="bg-main-desktop rounded-lg mb-8 w-28 md:w-32 h-18 lg:h-14 xl:h-12 flex justify-center items-center drop-shadow-xl">
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
        </div>
      </div>
      <div className="bg-black h-12 mt-24"></div>
    </div>
  );
}
