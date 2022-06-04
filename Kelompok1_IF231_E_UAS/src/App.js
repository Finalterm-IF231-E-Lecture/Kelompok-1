import "./style.css";

import { arrow, inputgender, remove } from "./AppScript.js";
import { GamePage } from "./components/Game";

import React from "react"; 
import { useState } from "react";

function App() {
  const [game, setGame] = useState([]);
  const [input, setInput] = useState("");

  var elem = document.documentElement;
  function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
  }

  const addGame = (game, setGame) => {
    setGame([...game, input]);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="container" id="homePage">
        <div id="pageHome">
          <div className="header-nav">
            <button onClick={closeFullscreen}>
              <img className="logo" src="image/icons/subtract.png" alt="" />
            </button>
            <button onClick={openFullscreen}>
              <img className="logo" src="image/icons/maximize.png" alt="" />
            </button>
            <a href="index.html">
              <img className="logo" src="image/icons/close.png" alt="" />
            </a>
          </div>
          <div className="header text-center">
            <img className="logo" src="image/logo.png" alt=" " />
            <h2 className="header-title mt-2 mb-3">7-Days UMN</h2>
          </div>
          <div className="section-character text-center mt-3 mb-3">
            <div
              className="arrow"
              onClick={function () {
                arrow();
                inputgender();
              }}
            >
              <img src="image/icons/prev.png" alt="arrow-left" />
            </div>
            <img
              id="character-1"
              className="character"
              src="image/boy.png"
              alt="character-boy"
            />
            <img
              id="character-2"
              className="character"
              src="image/girl.png"
              alt="character-girl"
              style={{ display: "none" }}
            />
            <input
              type="text"
              id="gender"
              value="boy"
              style={{ display: "none" }}
            />
            <div
              className="arrow"
              onClick={function () {
                arrow();
                inputgender();
              }}
            >
              <img src="image/icons/next.png" alt="arrow-right" />
            </div>
            <input type="text" name="gender" id="gender" value="boy" hidden />
          </div>
          <form
            name="form-player"
            className="form-player text-center"
            onSubmit={(e) => {
              e.preventDefault();
              addGame(game, setGame);
              remove();
            }}
          >
            <label htmlFor="name" className="mb-3">
              <b><span id="selected-character">Boy</span></b>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your name here . . ."
              onChange={handleChange}
              required
            />
            <select
              className="form-select form-control mt-3 prodi"
              aria-label="Prodi Default select example"
              id="prodi"
              required

            >
              <option selected>Program Studi</option>
              <option value="Informatika">Informatika</option>
              <option value="Komputer">Teknik Komputer</option>
              <option value="Elektro">Teknik Elektro</option>
              <option value="Fisika">Teknik Fisika</option>
              <option value="Informasi">Sistem Informasi</option>
            </select>
            <br />
            <button
              type="submit"
              className="btn btn-primary form-button btn-playgame"
            >
              Play!
            </button>
            <span id="jurusan" style={{ display: "none" }}></span>
          </form>
        </div>
      </div>
      <div className="gamePage">
        <GamePage game={game} />
      </div>
    </>
  );
}

export default App;
