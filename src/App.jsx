import React from "react";
import "./components/RandomQuotes.css";
import RandomQuotes from "./components/RandomQuotes";
import RandomQuotesAxios from "./components/RandomQuotesAxios";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <>
      <WeatherApp />
      <RandomQuotes />
      <RandomQuotesAxios />
    </>
  );
}

export default App;
