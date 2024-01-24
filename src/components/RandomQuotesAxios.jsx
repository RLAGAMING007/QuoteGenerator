import React, { useEffect, useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import axios from "axios";
const RandomQuotesAxios = () => {
  const [content, setContent] = useState(
    "Freedom is not worth having if it does not connote freedom to err."
  );

  const [author, setAuthor] = useState("Mahatma Gandhi");

  const LoadQuotes = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setContent(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <>
          <div className="quote">{content}</div>
          <div className="line"></div>
          <div className="bottom">
            <div className="author">{author}</div>
            <div className="relod__btn">
              <button onClick={LoadQuotes}>
                <ReplayIcon />
              </button>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default RandomQuotesAxios;
