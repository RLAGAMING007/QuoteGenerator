import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f1b33d368e5ca3cf5204b92025b6a69d`;
  const UpdateWeather = async (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLocation("");
    }
  };

  return (
    <div className="wa__div">
      <div className="weatherApp__container">
        <div className="input-box">
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            onKeyUp={UpdateWeather}
            placeholder="Enter Location"
          />
        </div>
        <div className="Weather">
          <h1 className="location">{data.name ? data.name : ""}</h1>
          {data.main ? (
            <h2 className="temp">{data.main.temp.toFixed()}°F</h2>
          ) : null}
        </div>
        <div className="current__weather">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        {data.main ? (
          <div className="main">
            <ul className="li0">
              <li> {data.main.temp.toFixed()}°F</li>

              <li>{data.main.humidity}%</li>
              <li>{data.wind.speed.toFixed()}MPH</li>
            </ul>
            <ul className="list1">
              <li>Feels Like</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WeatherApp;
