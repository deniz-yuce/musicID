import React, { useState } from "react";
import logo from "../Images/Logo.svg";
import happy from "../Images/happy.png";
import sad from "../Images/sad.png";
import { Link } from "react-router-dom";
import axios from "axios";
import mic from "../Images/Mic.svg";
import { WaveSpinner, DominoSpinner } from "react-spinners-kit";

export default function SearchAll() {
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [isAnalyze, setAnalyze] = useState(false);
  const [disable, setDisable] = useState(false);
  const [identify, setIdentify] = useState(true);
  const [song, setSong] = useState();
  const [genre, setGenre] = useState();
  const [mood, setMood] = useState(null);
  const [happyStyle, setHappyStyle] = useState("opacity-20");
  const [sadStyle, setSadStyle] = useState("opacity-20");

  const handleClick = async () => {
    let sarki = document.getElementById("sarki").value;
    try {
      const response = await axios.post("http://127.0.0.1:5000/sarki", {
        sarki,
      });
      setMood(response.data);
      if (response.data.data === "Happy") {
        setHappyStyle("opacity-100");
      } else {
        setSadStyle("opacity-100");
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const handleMic = async () => {
    setIsLoading(true);
    setDisable(true);
    setIdentify(true);
    setHappyStyle("opacity-20");
    setSadStyle("opacity-20");
    setSong("");
    setGenre("");
    setMood(null);

    setTimeout(() => {
      setAnalyze(true);
      setIsLoading(false);
      setDisable(false);
    }, 10000);

    const res = await axios.get("http://127.0.0.1:5000/getNeco");
    console.log(res);

    // try {
    //   axios.get("http://127.0.0.1:5000/getSong").then((res) => {
    //     setSong(res.data);
    //     setAnalyze(false);
    //     setIdentify(false);
    //     setFlag(true);
    //   });
    // } catch (err) {
    //   //setAnalyze(false);
    // } finally {
    //   console.log("mal armi");
    // }

    // if (flag) {
    //   try {
    //     axios.post("http://127.0.0.1:5000/getSongGenre").then((res) => {
    //       setGenre(res.data.genre);
    //     });
    //   } catch (err) {
    //     //setAnalyze(false);
    //     console.log(err);
    //   }
    // }
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
        <div className="mb-12">
          <h2 className="gradient text-center font-extrabold text-3xl mx-2 md:text-5xl lg:text-6xl drop-shadow-xl">
            Learn about a song
          </h2>
          <div className="flex p-8 justify-center">
            <div className="flex-1 " id="listen">
              <h3 className="font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-16 lg:mt-10 mx-10 text-center">
                Listen for a audio
              </h3>
              <div className="flex mt-8 md:mt-12 lg:mt-16 items-center justify-center">
                <button
                  className={disable && " opacity-50"}
                  onClick={() => handleMic()}
                  disabled={disable}
                >
                  <img
                    src={mic}
                    className={`w-full drop-shadow-xl`}
                    alt="mic"
                  />
                </button>
              </div>
              <div className="my-10 md:my-16 flex flex-col items-center">
                {/* <p className="underline mb-2 md:text-xl lg:text-2xl">Loaded:</p> */}
                <div className="flex items-center">
                  <WaveSpinner size={40} color="#303030" loading={isLoading} />
                  <DominoSpinner
                    size={100}
                    color="#303030"
                    loading={isAnalyze}
                  />
                </div>
                <p
                  id="loading"
                  className="flex items-center md:text-xl lg:text-2xl mt-6"
                >
                  {isLoading ? "Listening..." : ""}
                  {isAnalyze ? "Analyzing..." : ""}
                </p>
              </div>
            </div>
            <div className="flex-1 " id="mood">
              <h3 className="font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-16 lg:mt-10 mx-10 text-center">
                Enter a songs' lyric
              </h3>
              <div className="flex justify-center items-center md:gap-16 mt-8 md:mt-12 lg:mt-12">
                <textarea
                  id="sarki"
                  className="border rounded-lg p-4"
                  placeholder="Enter a song lyric please.."
                  rows="7"
                  cols="30"
                ></textarea>
              </div>
            </div>
          </div>
          <div
            className={`mt-10 flex items-center justify-center ${
              identify && "opacity-50"
            }`}
          >
            <button
              onClick={handleClick}
              disabled={identify}
              className="mb-12 bg-main-desktop text-projWhite font-semibold text-md md:text-xl rounded-lg w-28 md:w-36 h-8 md:h-10 xl:h-12 xl:pt-0 drop-shadow-xl"
            >
              Identify
            </button>
          </div>
          <ul className="flex font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-16 lg:mt-10 mx-10 text-center">
            <li className="flex-1">
              <h4>Song:</h4>
              <p
                id="foundSong"
                className="mt-16 font-extrabold text-2xl md:text-3xl lg:text-4xl"
              >
                {mood !== null && song}
              </p>
            </li>
            <li className="flex-1">
              <h4>Genre:</h4>
              <p
                id="foundSong"
                className="mt-16 font-extrabold text-2xl md:text-3xl lg:text-4xl"
              >
                {mood !== null && genre}
              </p>
            </li>
            <li className="flex-1 flex flex-col">
              <h4>Mood:</h4>
              <div className="flex p-8">
                <div id="happy" className="flex-1 flex flex-col items-center">
                  <img
                    src={happy}
                    className={`${happyStyle} w-1/2`}
                    alt="happy"
                  />
                  <p className="text-center">Happy</p>
                </div>
                <div id="sad" className="flex-1 flex flex-col items-center">
                  <img src={sad} className={`${sadStyle} w-1/2`} alt="sad" />
                  <p className="text-center">Sad</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="bg-black h-12 mt-24"></div> */}
    </div>
  );
}
