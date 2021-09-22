import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      await fetchWeather(query)
        .then((data) => {
          setWeatherData(data);
          setQuery("");
        })
        .catch((err) => {
          setWeatherData({});
          setQuery("");
        });
    }
  };
  const getWeatherAmbience = () => {
    if (!weatherData?.main) {
      return "default";
    }
    if (weatherData?.weather[0]?.description) {
      const keyword = weatherData?.weather[0]?.description.toLowerCase();
      if (keyword.indexOf("sunny") !== -1) {
        return "sunny";
      }
      if (keyword.indexOf("storm") !== -1) {
        return "storm";
      }
      if (keyword.indexOf("snow") !== -1) {
        return "snow";
      }
      if (keyword.indexOf("light rain") !== -1) {
        return "lightrain";
      }
      if (keyword.indexOf("rain") !== -1) {
        return "rain";
      }
      if (keyword.indexOf("thunder") !== -1) {
        return "thunder";
      }
      if (keyword.indexOf("lightning") !== -1) {
        return "lightning";
      }
      if (keyword.indexOf("few") !== -1) {
        return "few";
      }
      if (keyword.indexOf("broken") !== -1) {
        return "broken";
      }
      if (keyword.indexOf("overcast") !== -1) {
        return "overcast";
      }
      if (keyword.indexOf("cloud") !== -1) {
        return "cloud";
      }
      if (keyword.indexOf("haze") !== -1) {
        return "haze";
      }
      if (keyword.indexOf("fog") !== -1) {
        return "fog";
      }
      if (keyword.indexOf("smoke") !== -1) {
        return "smoke";
      }
      if (keyword.indexOf("mist") !== -1) {
        return "mist";
      }
      if (keyword.indexOf("wind") !== -1) {
        return "wind";
      }
      if (keyword.indexOf("clear") !== -1) {
        return "clearsky";
      }
    }
    return "default";
  };
  return (
    <div className={`main-container  ${getWeatherAmbience()}`}>
      <div className="brand-wrapper">
        <img className="brand-logo" src="/images/logo.png" />
        <h1 className="brand">Quick-Weather</h1>
      </div>
      <input
        type="text"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city.."
        onKeyPress={search}
      />
      {weatherData?.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weatherData.name}</span>
            <sup>{weatherData.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weatherData.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
            <p>{weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
