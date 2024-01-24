import React from "react";
import "./components/RandomQuotes.css";
import RandomQuotes from "./components/RandomQuotes";
import RandomQuotesAxios from "./components/RandomQuotesAxios";

function App() {
  return (
    <>
      <RandomQuotes />
      <RandomQuotesAxios />
    </>
  );
}

export default App;
