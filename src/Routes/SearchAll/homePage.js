import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.svg";
import emoji from "../../Images/Head.svg";
import baskent from "../../Images/baskent.svg";
import card from "../../Images/Card.svg";
import squares from "../../Images/SquaresMain.svg";

import "./index.css";

export default function homePage() {
  return (
    // <div className=" bg-main-desktop min-h-screen">
    <div className="bg-main-desktop h-full">
      <div className="flex justify-between">
        <Link to="/">
          <img
            src={logo}
            className="w-full xl:w-64 p-3 md:p-5 lg:p-7"
            alt="Logo"
          />
        </Link>
        <img src={baskent} width="180" className="mt-3" alt="baskent" />
      </div>
      {/* <div className="flex flex-col lg:flex-row lg:mx-24 lg:gap-x-32"> */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col md:flex-row lg:flex-col items-center lg:flex-1">
          <img src={emoji} className="w-full lg:w-8/12" alt="emoji" />
          <img
            src={squares}
            className="invisible w-0 md:visible md:w-8/12 lg:w-10/12"
            alt="squares"
          />
        </div>
        <div className="flex flex-col gap-y-20 lg:gap-y-12 items-center lg:flex-1">
          <h1 className="text-projWhite mt-12 font-semibold text-5xl lg:text-4xl mb-2 lg:mb-8">
            Identify Songs
          </h1>
          <a
            href="/moodSearch"
            className="border-2 text-4xl lg:text-3xl lg:mb-4 border-projWhite rounded-md w-60 lg:w-44 p-4 lg:p-2 text-center text-projWhite bg-[#FFFFFF40]"
          >
            Mood
          </a>
          <a
            href="/songSearch"
            className="border-2 text-4xl lg:text-3xl lg:mb-4 border-projWhite rounded-md w-60 lg:w-44 p-4 lg:p-2 text-center text-projWhite bg-[#FFFFFF40]"
          >
            Song
          </a>
          <a
            href="/genreSearch"
            className="border-2 text-4xl lg:text-3xl lg:mb-4 border-projWhite rounded-md w-60 lg:w-44 p-4 lg:p-2 text-center text-projWhite bg-[#FFFFFF40]"
          >
            Genre
          </a>
          <a
            href="/searchList"
            className="mb-12 border font-semibold text-2xl border-projWhite rounded-3xl w-72 p-4 text-center text-projWhite bg-[#FFFFFF80]"
          >
            Discover Now! 🎶🎶
          </a>
        </div>
        <div className="flex flex-col justify-between items-center lg:flex-1">
          <img
            src={card}
            className="w-11/12 md:w-4/5 lg:mt-0 lg:pt-0"
            alt="card"
          />
          <a
            href="/"
            className="border-2 text-4xl lg:text-3xl mt-4 lg:mb-4 border-projWhite rounded-3xl w-44 lg:w-44 p-2 lg:p-2 text-center text-projWhite"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}
