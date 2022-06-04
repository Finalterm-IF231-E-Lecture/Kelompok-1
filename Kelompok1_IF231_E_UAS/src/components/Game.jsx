import "../style.css";
import "../cloud.css";
import "../rain.css";
import "../mist.css";
import React, { useState, useEffect } from "react";

import {
  inputgenders,
  defaultCharacter,
  startTime,
  firstClick,
  totalMakanan
} from "../GameScript";
import {
  playerEat1,
  playerEat2,
  playerEat3,
  eating,
  playerSleep,
  sleeping,
  playerPlay,
  playing,
  playerStudy,
  studying,
  playerDrink,
  drinking,
  playerOlahraga,
  olahraga,
  playerBelanja,
  belanja,
  playerKonsultasi,
  konsultasi,
  playerHome,
  playerKampus,
  playerMall,
  playerRS
} from "../GameScript";
import {
  btnDisabled,
  btnEnabled,
  gameSummary,
  openFullscreen,
  closeFullscreen,
  showDetailedResult
} from "../GameScript";
import Weather from "./MappingWeather";
import News from "./MappingNews";
import Music from "./Audio";

export function GamePage({ game }) {
  const [data, setData] = useState([]);

  const weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=-6.2562631&lon=106.6184719&lang=id&appid=d41e0e2d3f349e3517d34842573a9765";
  const fetchData = async () => {
    const data = await fetch(weatherURL);
    const weathers = await data.json();
    setData(weathers.weather);
  };

  const [data1, setData1] = useState([]);
  const newsURL =
    "https://newsapi.org/v2/everything?q=apple&from=2022-06-01&to=2022-06-01&sortBy=popularity&apiKey=a3233a16bcf941debdd4ab025ff00c73";
  const fetchData1 = async () => {
    const data1 = await fetch(newsURL);
    const newss = await data1.json();
    setData1(newss.articles);
  };

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);

  // const [index, setIndex] = useState(1);
  // setInterval(randomNews, 45000);
  // function randomNews() {
  //   const newsIndex = Math.floor(Math.random() * 10);
  //   setIndex(newsIndex);
  // }

  return (
    <>
    <div>
      <div id="background-wrap" className="">
        <div id="weather-cloud" style={{display: "none"}}>
          <div class="x1">
              <div class="cloud"></div>
          </div>

          <div class="x2">
              <div class="cloud"></div>
          </div>

          <div class="x3">
              <div class="cloud"></div>
          </div>

          <div class="x4">
              <div class="cloud"></div>
          </div>

          <div class="x5">
              <div class="cloud"></div>
          </div>
        </div>
        <div id="weather-rain" style={{display: "none"}}>
          <section className="raining"></section>
        </div>
        <div id="weather-mist" style={{display: "none"}}>
          <section className="mists"></section>
        </div>
      </div>
    </div>
      {game.map((name) => (
        <div
          key={name}
          className="container"
          onLoad={function () {
            inputgenders();
          }}
        >
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
            <img className="logo text-center" src="image/logo.png" alt="" />
            <h2 className="header-title mt-2 mb-3">7-Days UMN</h2>
          </div>
          <div className="container-fluid game-status mt-3">
            <div className="row">
              <div className="col-md-2">
                <label htmlFor="progress-eat">
                  <img src="image/icons/eat.png" alt="" />
                </label>
                <progress
                  id="progress-eat"
                  value="5"
                  max="10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Progress Makan"
                ></progress>
              </div>
              <div className="col-md-2">
                <label htmlFor="progress-sleep">
                  <img src="image/icons/sleep.png" alt="" />
                </label>
                <progress
                  id="progress-sleep"
                  value="5"
                  max="10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Progress Tidur"
                ></progress>
              </div>
              <div className="col-md-2">
                <label htmlFor="progress-play">
                  <img src="image/icons/play.png" alt="" />
                </label>
                <progress
                  id="progress-play"
                  value="5"
                  max="10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Progress Bermain"
                ></progress>
              </div>
              <div className="col-md-2">
                <label htmlFor="progress-study">
                  <img src="image/icons/study.png" alt="" />
                </label>
                <progress
                  id="progress-study"
                  value="0"
                  max="10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Progress Belajar"
                ></progress>
              </div>
              <div className="col-md-2">
                <label htmlFor="progress-healthy">
                  <img src="image/icons/healthy.png" alt="" />
                </label>
                <progress
                  id="progress-healthy"
                  value="5"
                  max="10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Progress Kesehatan"
                ></progress>
              </div>
              <div className="col-md-2">
                <label htmlFor="progress-drink">
                  <img src="image/icons/drink.png" alt="" />
                </label>
                <progress
                  id="progress-drink"
                  value="5"
                  max="10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Progress Minum"
                ></progress>
              </div>
              <div className="col-md-12 text-center">
                <h4>
                  Day - <span id="player-day">1 </span>
                  <span id="player-hari"></span>
                </h4>
              </div>
            </div>
          </div>
          <div className="container-fluid player-activities text-center mt-3">
            <div className="row">
              <div className="col-3 player-goto">
                <h4>Go to:</h4>
                <button
                  id="btn-go-1"
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerHome, 5000);
                    btnDisabled();
                  }}
                  style={{ display: "none" }}
                >
                  Rumah <img src="image/icons/eat.png" alt="" />
                </button>
                <button
                  id="btn-go-2"
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerKampus, 5000);
                    btnDisabled();
                  }}
                  style={{ display: "none" }}
                >
                  Kampus <img src="image/icons/kampus.png" alt="" />
                  <span id="jam-kampus" style={{ display: "none" }}>
                    <br />
                    Buka pukul: 08:00-17:00
                  </span>
                </button>
                <button
                  id="btn-go-3"
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerMall, 5000);
                    btnDisabled();
                  }}
                  style={{ display: "none" }}
                >
                  Supermarket <img src="image/icons/mall.png" alt="" />
                  <span id="jam-supermarket" style={{ display: "none" }}>
                    <br />
                    Buka pukul: 10:00-23:00
                  </span>
                </button>
                <button
                  id="btn-go-4"
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerRS, 5000);
                    btnDisabled();
                  }}
                  style={{ display: "none" }}
                >
                  Rumah Sakit <img src="image/icons/rs.png" alt="" />
                </button>
                <div className="smartphone mt-2">
                  <div className="content text-center">
                    <h5 className="pt-2">News</h5>
                    <hr />
                    <div className="section-news">
                      {
                        data1.map((news) => {
                          return <News key={news.id} news={news} />;
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 player-profile">
                <h5 id="time"></h5>
                <h4>
                  <span id="playerGreet"></span>
                  <span id="username">{name}!</span>
                </h4>
                {data.map((weather) => {
                  return <Weather key={weather.id} weather={weather} />;
                })}
                <input type="text" id="genders" style={{ display: "none" }} />
                <img
                  id="player-character"
                  className="game-character mb-5"
                  alt="player-character"
                  style={{ display: "none" }}
                />
                <button
                  className="btn btn-danger"
                  id="btn-first"
                  data-bs-toggle="modal"
                  data-bs-target="#rulesModal"
                  onClick={function () {
                    firstClick();
                  }}
                >
                  Click here first!
                </button>
              </div>
              <div className="col-3 player-activity text-center">
                <h5>
                  <img src="image/icons/location.png" />{" "}
                  <span id="player-location">...</span>
                </h5>
                <p style={{ display: "none" }} id="prodjur">
                  Program studi: <span id="jurusans"></span>
                </p>
                <button
                  id="btn-act-1"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#foodModal"
                  onClick={totalMakanan}
                >
                  Makan <img src="image/icons/eat.png" alt="" />
                </button>
                <button
                  id="btn-act-2"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerSleep, 5300);
                    sleeping();
                    btnDisabled();
                  }}
                >
                  Tidur <img src="image/icons/sleep.png" alt="" />
                </button>
                <button
                  id="btn-act-3"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#studyModal"
                >
                  Belajar <img src="image/icons/study.png" alt="" />
                </button>
                <button
                  id="btn-act-4"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerPlay, 4200);
                    playing();
                    btnDisabled();
                  }}
                >
                  Main <img src="image/icons/play.png" alt="" />
                </button>
                <button
                  id="btn-act-5"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerDrink, 1000);
                    drinking();
                    btnDisabled();
                  }}
                >
                  Minum <img src="image/icons/drink.png" alt="" />
                </button>
                <button
                  id="btn-act-6"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerOlahraga, 12000);
                    olahraga();
                    btnDisabled();
                  }}
                >
                  Olahraga <img src="image/icons/olahraga.png" alt="" />
                </button>
                <button
                  id="btn-act-7"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerBelanja, 10000);
                    belanja();
                    btnDisabled();
                  }}
                >
                  Belanja <img src="image/icons/belanja.png" alt="" />
                </button>
                <button
                  id="btn-act-8"
                  style={{ display: "none" }}
                  className="btn btn-primary mb-2"
                  onClick={function () {
                    setTimeout(playerKonsultasi, 15000);
                    konsultasi();
                    btnDisabled();
                  }}
                >
                  Konsultasi <img src="image/icons/healthy.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <Music />
          <div className="modal fade" id="foodModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title text-center">Pilih makanan</h3>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row text-center">
                    <div className="col-md-4">
                      <img src="image/rice.png" alt="" />
                      <button
                        id="btn-1menu"
                        className="btn btn-primary mt-3"
                        data-bs-dismiss="modal"
                        onClick={function () {
                          setTimeout(playerEat1, 4500);
                          eating();
                          btnDisabled();
                        }}
                      >
                        Nasi + Lauk
                      </button>
                      <p>
                        Tersisa: <span id="jlhMakanan1"></span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src="image/snack.png" alt="" />
                      <button
                        id="btn-2menu"
                        className="btn btn-primary mt-3"
                        data-bs-dismiss="modal"
                        onClick={function () {
                          setTimeout(playerEat2, 2000);
                          eating();
                          btnDisabled();
                        }}
                      >
                        Snack
                      </button>
                      <p>
                        Tersisa: <span id="jlhMakanan2"></span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src="image/apple.png" alt="" />
                      <button
                        id="btn-3menu"
                        className="btn btn-primary mt-3"
                        data-bs-dismiss="modal"
                        onClick={function () {
                          setTimeout(playerEat3, 4000);
                          eating();
                          btnDisabled();
                        }}
                      >
                        Buah
                      </button>
                      <p>
                        Tersisa: <span id="jlhMakanan3"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="rulesModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title text-center">
                    Peraturan Permainan
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p>1. Capai hari ke 7 (Minggu)</p>
                  <p>2. Pertahankan status agar tidak kosong</p>
                  <p>3. Game bisa berakhir apabila (kelaparan, sakit)</p>
                  <p>
                    4. Setiap aktivitas dapat menambah dan mengurangi aktivitas
                    lainnya
                  </p>
                  <p>Background berdasarkan waktu: </p>
                  <div className="row text-center clock-hour">
                    <div className="col-3 clock-hour1">
                      <p>Pagi</p>
                    </div>
                    <div className="col-3 clock-hour2">
                      <p>Siang</p>
                    </div>
                    <div className="col-3 clock-hour3">
                      <p>Sore</p>
                    </div>
                    <div className="col-3 clock-hour4">
                      <p>Malam</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
                <div className="modal-header">
                  <h4 className="modal-title text-center">About us</h4> 
                  <span>Kelompok 1 - IF231 - E/EL</span>
                </div>
                <div className="modal-body row about-us text-center">
                  <div className="col-4">
                    <img src="image/anggota/hansen.jpg"></img>
                    <p>Hansen (60325)</p>
                  </div>
                  <div className="col-4">
                    <img src="image/anggota/prudence.jpg"></img>
                    <p>Prudence Tendy (60765)</p>
                  </div>
                  <div className="col-4">
                    <img src="image/anggota/liusianto.jpg"></img>
                    <p>Liusianto (61560)</p>
                  </div>
                  <div className="col-4">
                    <img src="image/anggota/william.jpg"></img>
                    <p>William Rayhan Harsono (61964)</p>
                  </div>
                  <div className="col-4">
                    <img src="image/anggota/marselino.jpg"></img>
                    <p>Marselino Lengyu Pantouw (61909)</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="summaryModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title text-center">Game Summary</h3>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="result">
                    <p id="result_eat"></p>
                    <p id="result_sleep"></p>
                    <p id="result_play"></p>
                    <p id="result_study"></p>
                    <p id="result_olahraga"></p>
                  </div>
                  <div id="detailed-result" style={{display: "none"}}>
                    <p id="result_kampus" className="mt-3"></p>
                    <p id="result_rumah"></p>
                    <p id="result_mall"></p>
                    <p id="result_rs"></p>
                    <p id="result_lapar"></p>
                    <p id="result_tidur"></p>
                    <p id="result_tertidur"></p>
                  </div>
                  <button className="btn btn-primary" id="btn-detailed-result" onClick={showDetailedResult}>Tampilkan detail</button>
                </div>
                <div className="modal-footer">
                  <a href="index.html">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="studyModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-center">
                    Program studi: <span id="jurusanss"></span>
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <button
                    className="btn btn-primary mb-2"
                    data-bs-dismiss="modal"
                    id="matkul-1"
                    onClick={function () {
                      setTimeout(playerStudy, 5000);
                      studying();
                      btnDisabled();
                    }}
                  >
                    <span id="namaMatkul-1">1</span>
                  </button>
                  <button
                    id="matkul-1"
                    className="btn btn-primary mb-2 mr-2 ml-2"
                    data-bs-dismiss="modal"
                    onClick={function () {
                      setTimeout(playerStudy, 5000);
                      studying();
                      btnDisabled();
                    }}
                  >
                    <span id="namaMatkul-2">2</span>
                  </button>
                  <button
                    id="matkul-1"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={function () {
                      setTimeout(playerStudy, 5000);
                      studying();
                      btnDisabled();
                    }}
                  >
                    <span id="namaMatkul-3">3</span>
                  </button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GamePage;
