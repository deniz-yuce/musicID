import React from "react";
import logo from "../Images/Logo.svg";
import file from "../Images/File.svg";
import mic from "../Images/Mic.svg";
import { Link } from "react-router-dom";

export default function SongSearch() {
  return (
    <div className="font-main bg-song h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img
            src={logo}
            className="w-2/5 md:w-1/3 xl:w-64 p-3 md:p-5 lg:p-7"
            alt="Logo"
          />
        </Link>
        <div className="grid place-items-center mt-16 md:mt-24 lg:mt-32">
          <p className="font-extrabold text-3xl md:text-5xl lg:text-6xl">
            Search for a song
          </p>
          <p className="font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-16 lg:mt-20 mx-10 text-center">
            Upload a music file or listen for audio:
          </p>
          <div className="flex justify-between md:gap-16 mt-8 md:mt-12 lg:mt-16">
            <img src={file} className="w-1/3 md:w-3/5" alt="file" />
            <img src={mic} className="w-1/3 md:w-3/5" alt="mic" />
          </div>
          <div className="my-10 md:my-16">
            <p className="font-bold mb-2 md:text-xl lg:text-2xl">Loaded:</p>
            <p id="loaded" className="md:text-xl lg:text-2xl">
              Ed Sheeran -Perfect.mp3
            </p>
          </div>
          <Link to="/songResult">
            <button className="bg-black text-projWhite font-semibold text-md md:text-xl rounded-lg w-28 md:w-36 h-8 md:h-10 xl:h-12 xl:pt-0">
              <p className="md:text-xl xl:mb-0">Identify</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-black h-12"></div>
    </div>
  );
}
