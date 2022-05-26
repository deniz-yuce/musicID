import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../Images/Logo.svg";
import mic from "../Images/Mic.svg";
import "./index.css";
import { PushSpinner, GooSpinner } from "react-spinners-kit";

const SearchList = () => {
  const [moo, setMoo] = useState({
    SONG_NAME: "Untitled",
    ARTIST: "",
    MOOD: "Untitled",
    GENRE: "Untitled",
    IMG: "https://www.pngitem.com/pimgs/m/80-801875_free-image-icon-png-vector-line-art-transparent.png",
    LYRICS_NO_FORMAT: "Untitled",
    LYRICS: "Untitled",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isAnalyze, setAnalyze] = useState(false);
  const [disable, setDisable] = useState(false);
  const [showLyrics, setShowLyrics] = useState(true);
  const [showCard, setShowCard] = useState(false);

  const handleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  const handleNewSong = () => {
    setShowCard(false);
  };

  const handleMic = async () => {
    // setMoo({
    //   SONG_NAME: "",
    //   MOOD: "",
    //   GENRE: "",
    //   IMG: "https://www.pngitem.com/pimgs/m/80-801875_free-image-icon-png-vector-line-art-transparent.png",
    //   LYRICS_NO_FORMAT: "",
    // });
    setIsLoading(true);
    setDisable(true);
    setTimeout(() => {
      setAnalyze(true);
      setIsLoading(false);
      setDisable(false);
    }, 10000);
    try {
      // const res = await axios.get("http://127.0.0.1:5000/getNeco");
      // setMoo(res.data);
      await axios
        .get("http://127.0.0.1:5000/getNeco")
        .then((res) => res.data)
        .then((data) => {
          const temp = data;
          const arr = temp.SONG_NAME.split("-");
          temp.ARTIST = arr[0];
          temp.SONG_NAME = arr[1];
          setMoo(temp);
          setShowCard(true);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setAnalyze(false);
      setDisable(false);
    }
  };

  // useEffect(() => {
  //   const listElement = document.createElement("p");
  //   const container = document.querySelector("#lyrics");
  //   listElement.innerHTML = moo.LYRICS_NO_FORMAT.replace(
  //     /(?:\r\n|\r|\n)/g,
  //     "<br />"
  //   );
  //   container.appendChild(listElement);
  // }, [moo.LYRICS_NO_FORMAT]);

  return (
    <>
      <Link to="/">
        <img
          src={logo}
          className="w-3/5 md:w-1/4 lg:w-1/4 xl:w-64 p-3 md:p-5 lg:p-7"
          alt="Logo"
        />
      </Link>
      <div className="text-black">
        {!showCard ? (
          <>
            {" "}
            {!isLoading && !isAnalyze && (
              <>
                <h2 className="font-bold text-4xl mt-10 md:mt-16 lg:mt-10 mx-10 text-center">
                  Search a song !
                </h2>
                <div className="flex mt-8 md:mt-12 lg:mt-16 items-center justify-center">
                  <button>
                    <img
                      src={mic}
                      className={`w-full drop-shadow-xl`}
                      alt="mic"
                      onClick={handleMic}
                      disabled={disable}
                    />
                  </button>
                </div>
              </>
            )}
            <div className="my-10 flex flex-col items-center">
              <div className="flex items-center">
                <PushSpinner size={75} color="#303030" loading={isLoading} />

                <GooSpinner size={150} color="#303030" loading={isAnalyze} />
              </div>
              <p
                id="loading"
                className="flex items-center md:text-xl lg:text-4xl mt-12 "
              >
                {isLoading ? "Listening..." : ""}
                {isAnalyze ? "Analyzing..." : ""}
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center mb-12">
            {/* -----------------------------------------------------CARD----------------------------------------------------------------- */}
            <div className="w-10/12 md:w-1/2 lg:w-5/12 xl:w-3/12 mt-6 md:mt-10 bg-[#202124] rounded-3xl">
              <div className="relative  h-[400px] rounded-t-2xl">
                <img
                  //width={250}
                  //height={550}
                  className={
                    "w-full object-cover rounded-2xl  opacity-90 h-full "
                  }
                  src={moo.IMG}
                  alt="resim"
                />

                {/* <img
                //width={250}
                //height={150}
                className={
                  "w-full  h-full absolute bottom-0 p-12 object-contain"
                }
                src={moo.IMG}
                alt="resim"
              /> */}

                <div className="bg-black py-24  absolute bottom-0 w-full moo"></div>
                <p className="text-3xl text-center font-semibold  text-projWhite absolute bottom-4 w-full  ">
                  {moo.ARTIST}
                </p>
              </div>

              <ul className="text-projWhite px-6 py-4 ">
                <li>
                  <p className="text-base font-light opacity-70">Song Name</p>
                  <p className="text-xl">{moo.SONG_NAME}</p>
                </li>
                <div
                  className="bg-gray opacity-30 my-2"
                  style={{ width: "100%", height: "1px" }}
                ></div>
                <li>
                  <p className="text-base font-light opacity-70">Mood</p>
                  <p className="text-xl">{moo.MOOD}</p>
                </li>

                <div
                  className="bg-gray opacity-30 my-2"
                  style={{ width: "100%", height: "1px" }}
                ></div>
                <li>
                  <p className="text-base font-light opacity-70">Genre</p>
                  <p className="text-xl">{moo.GENRE}</p>
                </li>

                <div
                  className="bg-gray opacity-30 my-2"
                  style={{ width: "100%", height: "1px" }}
                ></div>
                <li>
                  <p className="text-base font-light  opacity-70">Lyrics</p>
                  {/* <div
                  id="lyrics"
                  className={
                    showLyrics
                      ? "content hover:cursor-pointer text-xl"
                      : "hover:cursor-pointer text-xl"
                  }
                  onClick={handleLyrics}
                ></div> */}
                  <p
                    className={
                      showLyrics
                        ? "content hover:cursor-pointer text-xl"
                        : "hover:cursor-pointer text-xl"
                    }
                    onClick={handleLyrics}
                  >
                    {moo.LYRICS}
                  </p>
                </li>
              </ul>
            </div>
            <button
              className="bg-black text-projWhite mt-8 p-5 text-2xl rounded-lg"
              onClick={handleNewSong}
            >
              {" "}
              ◀️Search a new song!
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchList;
