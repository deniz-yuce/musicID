import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignUp from "./Routes/SignUp/signup";
import LogIn from "./Routes/LogIn/login";
import Identify from "./Routes/Identify/identify";
import SongSearch from "./Routes/SongSearch/songsearch";
import SongResult from "./Routes/SongSearch/songresult";
import GenreSearch from "./Routes/GenreSearch/genresearch";
import GenreResult from "./Routes/GenreSearch/genreresult";
import MoodSearch from "./Routes/MoodSearch/moodsearch";
import MoodResult from "./Routes/MoodSearch/moodresult";
import SearchAll from "./Routes/SearchAll/searchall";
import SearchList from "./Routes/SearchAll/searchList";
import HomePage from "./Routes/SearchAll/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/songSearch" element={<SongSearch />} />
      <Route path="/songResult" element={<SongResult />} />
      <Route path="/genreSearch" element={<GenreSearch />} />
      <Route path="/genreResult" element={<GenreResult />} />
      <Route path="/moodSearch" element={<MoodSearch />} />
      <Route path="/moodResult" element={<MoodResult />} />
      <Route path="/searchAll" element={<SearchAll />} />
      <Route path="/searchList" element={<SearchList />} />
      <Route path="/homePage" element={<HomePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
