import React, { useState } from "react";
import logo from "../Images/Logo.svg";
import happy from "../Images/happy.png";
import sad from "../Images/sad.png";
import { Link } from "react-router-dom";
import { DominoSpinner } from "react-spinners-kit";
import axios from "axios";

export default function MoodSearch() {
  const [data, setData] = useState();

  const [happyStyle, setHappyStyle] = useState("opacity-20");
  const [sadStyle, setSadStyle] = useState("opacity-20");

  const [isAnalyze, setAnalyze] = useState(false);

  const [disable, setDisable] = useState(false);

  const handleClick = async () => {
    let sarki = document.getElementById("sarki").value;
    let data = {};
    data.sarki = sarki;
    setHappyStyle("opacity-20");
    setSadStyle("opacity-20");
    setAnalyze(true);
    setDisable(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/sarki", {
        sarki,
      });
      console.log(response);
      setData(response.data);
      if (response.data.data === "Happy") {
        setHappyStyle("opacity-100");
      } else {
        setSadStyle("opacity-100");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setAnalyze(false);
      setDisable(false);
    }
  };

  return (
    <div className="font-main text-black">
      <div className="">
        <Link to="/">
          <img
            src={logo}
            className="w-2/5 md:w-1/3 xl:w-64 p-3 md:p-5 lg:p-7"
            alt="Logo"
          />
        </Link>
        <div className="grid place-items-center mt-12 md:mt-16 lg:mt-2">
          <p className="gradient text-center font-extrabold text-3xl mx-2 md:text-5xl lg:text-6xl drop-shadow-xl">
            Search for a songs mood
          </p>
          <p className="font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-16 lg:mt-10 mx-10 text-center">
            Upload a music text file containing lyrics:
          </p>
          <div className="flex justify-between md:gap-16 mt-8 md:mt-12 lg:mt-12">
            <textarea
              id="sarki"
              className="border rounded-lg p-4"
              placeholder="Enter a song lyric please.."
              rows="7"
              cols="30"
            ></textarea>
          </div>
          <div to="/moodResult" className="mt-10">
            <button
              onClick={handleClick}
              disabled={disable}
              className="bg-main-desktop text-projWhite font-semibold text-md md:text-xl rounded-lg w-28 md:w-36 h-8 md:h-10 xl:h-12 xl:pt-0 drop-shadow-xl"
            >
              <p className="md:text-xl xl:mb-0">Identify</p>
            </button>
          </div>
        </div>
        <div className="my-8">
          <div className="flex flex-col items-center">
            <DominoSpinner size={100} color="#303030" loading={isAnalyze} />
            <p
              id="loading"
              className="flex items-center mb-10 text-center md:text-xl lg:text-2xl"
            >
              {isAnalyze ? "Analyzing..." : ""}
            </p>
          </div>

          <div className="flex justify-around md:mx-44 lg:mx-72 xl:mx-96">
            <div id="happy" className="flex flex-col">
              <img src={happy} className={happyStyle} alt="happy" />
              <p className="text-center">Happy</p>
            </div>
            <div id="sad" className="flex flex-col">
              <img src={sad} className={sadStyle} alt="sad" />
              <p className="text-center">Sad</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black h-12 mt-24"></div> */}
    </div>
  );
}
