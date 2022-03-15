import React, { useState } from "react";
import logo from "../Images/Logo.svg";
import mic from "../Images/Mic.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function GenreSearch() {
  const [data, setData] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isAnalyze, setAnalyze] = useState(false);

  const handleClick = async () => {
    setData("");
    setIsLoading(true);
    setTimeout(() => {
      setAnalyze(true);
      setIsLoading(false);
    }, 10000);
    try {
      const response = await axios.post("http://127.0.0.1:5000/getSongGenre");
      // .then((res) => setData(res.data))
      // .then((data) => {
      //   console.log(data);
      //   setData(data.data.genre);
      // });
      console.log(response);
      setData(response.data.genre);
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
          <p className="gradient text-center font-extrabold text-3xl mx-2 md:text-5xl lg:text-6xl drop-shadow-xl">
            Search for a songs genre
          </p>
          <p className="font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-16 lg:mt-10 mx-10 text-center">
            Listen for audio:
          </p>
          <div className="flex mt-8 md:mt-12 lg:mt-16">
            <button onClick={handleClick}>
              <img src={mic} className="w-full drop-shadow-xl" alt="mic" />
            </button>
          </div>
          <div className="my-10 md:my-16">
            <p id="loadingGenre" className="md:text-xl lg:text-2xl">
              {isLoading ? "Listening..." : ""}
              {isAnalyze ? "Analyzing..." : ""}
            </p>
          </div>
          <p
            id="foundSong"
            className="font-extrabold text-2xl md:text-3xl lg:text-4xl"
          >
            {data}
          </p>
        </div>
      </div>
    </div>
  );
}
