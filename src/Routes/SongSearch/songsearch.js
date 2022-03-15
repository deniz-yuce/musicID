import React, { useState } from "react";
import logo from "../Images/Logo.svg";
import file from "../Images/File.svg";
import mic from "../Images/Mic.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SongSearch() {
  const [data, setData] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isAnalyze, setAnalyze] = useState(false);

  const handleClick = async () => {
    setData("");
    setIsLoading(true);
    setTimeout(() => {
      setAnalyze(true);
      setIsLoading(false);
    }, 6000);
    try {
      await axios
        .get("http://127.0.0.1:5000/getSong")
        .then((res) => res.data)
        .then((data) => setData(data));
    } catch (err) {
      console.log(err);
    } finally {
      setAnalyze(false);
    }
  };

  return (
    <div className="font-main text-black">
      <div>
        <Link to="/">
          <img
            src={logo}
            className="w-2/5 md:w-1/3 xl:w-64 p-3 md:p-5 lg:p-7"
            alt="Logo"
          />
        </Link>
        <div className="grid place-items-center mt-12 md:mt-16 lg:mt-2 pb-20">
          <p className="gradient text-center font-extrabold text-3xl md:text-5xl lg:text-6xl drop-shadow-xl">
            Search for a song
          </p>
          <p className="font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-16 lg:mt-10 mx-10 text-center">
            {/* Upload a music file or listen for audio: */}
            Listen for audio:
          </p>
          {/* <div className="flex justify-between md:gap-16 mt-8 md:mt-12 lg:mt-16">
            <img
              src={file}
              className="w-1/3 md:w-3/5 drop-shadow-xl"
              alt="file"
            />
            <img
              src={mic}
              className="w-1/3 md:w-3/5 drop-shadow-xl"
              alt="mic"
            />
          </div> */}
          <div className="flex mt-8 md:mt-12 lg:mt-16">
            <button onClick={handleClick}>
              <img src={mic} className="w-full drop-shadow-xl" alt="mic" />
            </button>
          </div>
          <div className="my-10 md:my-16">
            {/* <p className="underline mb-2 md:text-xl lg:text-2xl">Loaded:</p> */}
            <p id="loading" className="md:text-xl lg:text-2xl">
              {isLoading ? "Listening..." : ""}
              {isAnalyze ? "Analyzing..." : ""}
            </p>
          </div>
          {/* <Link to="/songResult">
            <button className="bg-main-desktop text-projWhite font-semibold text-md md:text-xl rounded-lg w-28 md:w-36 h-8 md:h-10 xl:h-12 xl:pt-0 drop-shadow-xl">
              <p className="md:text-xl xl:mb-0">Identify</p>
            </button>
          </Link> */}
          <p
            id="foundSong"
            className="font-extrabold text-2xl md:text-3xl lg:text-4xl"
          >
            {data}
          </p>
        </div>
      </div>
      {/* <div className="bg-black h-12 mt-24"></div> */}
    </div>
  );
}
