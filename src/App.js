import logo from "./Images/Logo.svg";
import arrow from "./Images/arrow_right.svg";
import emoji from "./Images/Emoji.svg";
import play from "./Images/PlayButton.svg";
import playlistImg1 from "./Images/Playlist1.svg";
import playlistImg2 from "./Images/Playlist2.svg";
import playlistImg3 from "./Images/Playlist3.svg";
import squares from "./Images/Squares.svg";
import phone from "./Images/PhoneMain.svg";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="font-main bg-no-repeat bg-cover bg-main-desktop">
      <div className="p-4 flex justify-between">
        <Link to="/">
          <img
            src={logo}
            className="w-5/6 p-0.5 md:w-full xl:w-full"
            alt="Logo"
          />
        </Link>
        <Link to="/signup">
          <button className="bg-white-bg rounded-lg w-28 md:w-32 h-18 lg:h-14 xl:h-12 flex justify-center items-center">
            <div className="flex md:ml-2">
              <p className="text-projWhite font-bold text-md md:text-xl align-middle mt-0.5 lg:text-2xl xl:text-xl">
                Sign Up
              </p>
              <img src={arrow} className="" alt="arrom" />
            </div>
          </button>
        </Link>
      </div>

      <div className="flex xl:ml-24">
        <img
          src={phone}
          className="hidden lg:flex lg:w-1/5 lg:ml-24 xl:ml-56 lg:mr-6 xl:mr-12 lg:my-8 xl:mb-20"
          alt="phone"
        />
        <div className="mt-24 xl:mt-36 mx-5 xl:mr-56 xl:ml-16 mb-16 text-center lg:text-left">
          <h1 className="text-projWhite font-black text-4xl md:text-7xl">
            Identify songs playing around you
          </h1>
          <h3 className="text-projWhite font-medium md:text-lg mt-9 mx-1 lg:mx-0 lg:text-xl xl:text-2xl">
            MusicID will help you get more info about your favorite songs
          </h3>
        </div>
      </div>

      <div className="pb-24 pt-24 bg-projWhite flex flex-col items-center">
        <div className="mx-12 md:mx-20 xl:mx-64 mb-16 md:pb-4 bg-main-desktop text-left rounded-lg flex flex-col items-center lg:items-start md:flex-row">
          <div className="text-projWhite lg:my-12 lg:ml-4">
            <p className="mx-4 md:ml-8 pt-8 mb-6 font-bold text-xl lg:text-3xl">
              Our mission is to help people recognize and categorize the sounds
              around them
            </p>
            <p className="mx-6 md:ml-8 lg:text-xl">
              MusicID is a web application that recognizes and classifies music
              around you. With MusicID you can not only recognize your songs but
              also find their mood and genre classification.
            </p>
          </div>
          <img
            src={emoji}
            className="w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5 my-4 md:mr-4 md:pt-3 lg:mt-10"
            alt="emoji"
          />
        </div>

        <div className="mb-24 xl:mb-32 xl:mt-12 bg-blue-400 rounded-lg mx-12">
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <img src={squares} className="rounded-lg xl:w-full" alt="emoji" />
            <div className="bg-no-repeat flex flex-col mt-16 mx-6 pb-6 lg:justify-center lg:w-full lg:mr-36 xl:mr-64 lg:ml-16 xl:ml-24">
              <p className="text-projWhite lg:text-2xl lg:mb-2">
                Find the songs you like with MusicID
                <br />
                Identify their mood and genre
              </p>
              <p className="mb-4 md:mb-6 text-blue-200 font-semibold mt-2 lg:text-2xl lg:mb-4">
                Choose to you liking
              </p>
              <Link to="/identify">
                <button className="bg-projWhite text-blue-400 font-extrabold text-md rounded-lg pt-1 w-28 h-8 xl:h-12 xl:pt-0">
                  <p className="lg:text-xl lg:mb-4 xl:mb-0">Identify</p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex xl:w-7/12">
          <div className="bg-playlist-1 rounded-lg bg-no-repeat mx-12 lg:mx-6 mb-24 lg:mb-16 pb-0.5">
            <div className="relative">
              <img src={playlistImg1} className="md:w-full" alt="playButton" />
              <div>
                <button className="absolute bottom-2 right-3 drop-shadow-xl">
                  <img src={play} className="" alt="playButton" />
                </button>
              </div>
            </div>
            <div className="mx-9 mt-8">
              <h2 className="text-black text-3xl font-extrabold">Songs</h2>
              <p className="text-black font-medium text-base mt-2">
                You can find our collection of songs in this playlist
              </p>
              <div className="text-black font-bold text-md mt-6 mb-10">
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Adele</p>
                  <p>Easy On Me</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Alec Benjamin</p>
                  <p>Demons</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Ed Sheeran</p>
                  <p>Perfect</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>LISA</p>
                  <p>Money</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Glass Animals</p>
                  <p>Heat Waves</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-playlist-2 rounded-lg bg-no-repeat mx-12 lg:mx-6 mb-24 lg:mb-16 pb-0.5">
            <div className="relative">
              <img src={playlistImg2} className="md:w-full" alt="playButton" />
              <div>
                <button className="absolute bottom-2 right-3 drop-shadow-xl">
                  <img src={play} className="" alt="playButton" />
                </button>
              </div>
            </div>
            <div className="mx-9 mt-8">
              <h2 className="text-black text-3xl font-extrabold">Songs</h2>
              <p className="text-black font-medium text-base mt-2">
                You can find our collection of songs in this playlist
              </p>
              <div className="text-black font-bold text-md mt-6 mb-10">
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Adele</p>
                  <p>Easy On Me</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Alec Benjamin</p>
                  <p>Demons</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Ed Sheeran</p>
                  <p>Perfect</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>LISA</p>
                  <p>Money</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Glass Animals</p>
                  <p>Heat Waves</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-playlist-3 rounded-lg bg-no-repeat mx-12 lg:mx-6 mb-24 lg:mb-16 pb-0.5">
            <div className="relative">
              <img src={playlistImg3} className="md:w-full" alt="playButton" />
              <div>
                <button className="absolute bottom-2 right-3 drop-shadow-xl">
                  <img src={play} className="" alt="playButton" />
                </button>
              </div>
            </div>
            <div className="mx-9 mt-8">
              <h2 className="text-black text-3xl font-extrabold">Songs</h2>
              <p className="text-black font-medium text-base mt-2">
                You can find our collection of songs in this playlist
              </p>
              <div className="text-black font-bold text-md mt-6 mb-10">
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Adele</p>
                  <p>Easy On Me</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Alec Benjamin</p>
                  <p>Demons</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Ed Sheeran</p>
                  <p>Perfect</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>LISA</p>
                  <p>Money</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 border-black mt-3 items-center">
                  <p>Glass Animals</p>
                  <p>Heat Waves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black h-24"></div>
    </div>
  );
}

export default App;
