import React from "react";
import logo from "../../Images/MobileLogo.svg";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="font-main bg-main-desktop h-screen grid place-items-center">
      <div className="flex flex-col items-center">
        <Link to="/">
          <div className="flex justify-center">
            <img src={logo} className="w-4/5 mb-12" alt="Logo" />
          </div>
        </Link>
        <div className="bg-login p-12 flex flex-col rounded-xl lg:p-20 xl:p-16">
          <p className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-3xl font-extrabold text-center mb-8 xl:mb-14">
            Log In
          </p>
          <label
            for="email"
            className="text-black md:pb-2 text-xl md:text-2xl lg:text-3xl xl:text-xl font-semibold"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="  example@mail.com"
            className="bg-border bbg-login mb-6 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
          ></input>
          <label
            for="password"
            className="text-black md:pb-2 text-xl md:text-2xl lg:text-3xl xl:text-xl font-semibold"
          >
            Password:
          </label>
          <input
            type="text"
            id="password"
            placeholder=""
            // className="bg-border mb-12 focus:shadow-lg focus:shadow-purple"
            className="bg-border bg-login mb-12 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
          ></input>
          <button className="bg-main-desktop text-projWhite font-medium xl:font-semibold text-xl md:text-2xl lg:text-3xl xl:text-2xl py-1.5 rounded-lg shadow-md">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
