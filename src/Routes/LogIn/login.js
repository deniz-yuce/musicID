import React, { useState } from "react";
import logo from "../../Images/MobileLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogIn() {
  const [wrongPass, setWrongPass] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    setWrongPass("");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = {};
    user.email = email;
    user.password = password;
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        user,
      });
      console.log(response.data);
      if (response.data.flag === 1) {
        //KONTROL ET DB İLE == İKEN === YAPTIM
        navigate("/identify");
      } else {
        setWrongPass("*Wrong email or password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="font-main bg-main-desktop h-screen lg:h-full grid place-items-center">
      <div className="flex flex-col items-center">
        <Link to="/">
          <div className="flex justify-center">
            <img src={logo} className="w-4/5 my-12" alt="Logo" />
          </div>
        </Link>
        <div className="bg-login p-12 mb-36 flex flex-col rounded-xl lg:p-20 xl:p-16">
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
            className="bg-border bg-login p-2 mb-6 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
          ></input>
          <label
            for="password"
            className="text-black md:pb-2 text-xl md:text-2xl lg:text-3xl xl:text-xl font-semibold"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder=""
            // className="bg-border mb-12 focus:shadow-lg focus:shadow-purple"
            className="bg-border bg-login p-2 mb-2 rounded-lg text-xl md:text-2xl lg:text-2xl focus:outline focus:outline-1 focus:outline-purple focus:shadow-md focus:shadow-purple"
          ></input>
          <p
            id="wrongPass"
            className="mb-6 italic font-semibold text-semiBlack"
          >
            {wrongPass}
          </p>
          <button
            onClick={handleClick}
            className="bg-main-desktop p-2 text-projWhite font-medium xl:font-semibold text-xl md:text-2xl lg:text-3xl xl:text-2xl py-1.5 rounded-lg shadow-md"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
