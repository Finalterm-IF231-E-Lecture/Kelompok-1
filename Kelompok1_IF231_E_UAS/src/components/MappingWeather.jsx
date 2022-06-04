import React from "react";

const Weather = ({ weather }) => {
  if(weather.main === "Clouds" || weather.main === "Clear") {
    document.getElementById("weather-cloud").style.display = "block";
    document.getElementById("weather-rain").style.display = "none";
    document.getElementById("weather-mist").style.display = "none";
  } else if(weather.main === "Thunderstorm" || weather.main === "Drizzle" || weather.main === "Rain") {
    document.getElementById("weather-cloud").style.display = "none";
    document.getElementById("weather-rain").style.display = "block";
    document.getElementById("weather-mist").style.display = "none";
  } else if(weather.main === "Haze" || weather.main === "Mist") {
    document.getElementById("weather-cloud").style.display = "none";
    document.getElementById("weather-rain").style.display = "none";
    document.getElementById("weather-mist").style.display = "block";
  }

  return (
    <div className="weather-section">
      <p>
        Cuaca Tangerang: {weather.main} ({weather.description})
      </p>
    </div>
  );
};

export default Weather;
