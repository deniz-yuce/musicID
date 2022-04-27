import React, { useState } from "react";
import logo from "../../Images/MobileLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const handleClick = async () => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = {};
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.password = password;
    try {
      const response = await axios.post("http://127.0.0.1:5000/register", {
        user,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/identify");
    }
    // axios
    //   .post("http://127.0.0.1:5000/register", { user })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="font-main bg-main-desktop h-screen lg:h-full grid place-items-center">
      <div className="flex flex-col items-center">
        <Link to="/">
          <div className="flex justify-center">
            <img src={logo} className="w-4/5 my-12" alt="Logo" />
          </div>
        </Link>
        <div className="bg-login p-12 flex flex-col rounded-xl sm:my-5">
          <p className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-3xl font-extrabold text-center mb-8 xl:mb-14">
            Sign Up
          </p>
          <label
            for="name"
            className="text-black md:pb-2 text-xl md:text-2xl lg:text-3xl xl:text-xl font-semibold"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="bg-border bg-login p-2 mb-6 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
          ></input>
          <label
            for="surname"
            className="text-black md:pb-2 text-xl md:text-2xl lg:text-3xl xl:text-xl font-semibold"
          >
            Surname:
          </label>
          <input
            type="text"
            id="surname"
            className="bg-border bg-login p-2 mb-6 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
          ></input>
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
            className="bg-border bg-login p-2 mb-6 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
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
            className="bg-border bg-login p-2 mb-12 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
          ></input>
          {/* <Link to="/identify"> */}
          <button
            onClick={handleClick}
            className="bg-main-desktop text-projWhite font-medium xl:font-semibold text-xl md:text-2xl lg:text-3xl xl:text-2xl py-1.5 rounded-lg shadow-md"
          >
            Sign Up
          </button>
          {/* </Link> */}

          <Link
            to="/login"
            className="my-4 p-2 text-right underline underline-offset-2 text-purple font-semibold md:text-lg lg:text-xl xl:text-lg"
          >
            Already have an account?
          </Link>
        </div>
      </div>
      {/* <div className="sm:h-44 lg:h-12"></div> */}
    </div>
  );
}
