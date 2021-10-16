import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Shortener = ({
  newLongLink,
  setNewLongLink,
  textInput,
  setTextInput,
  newShortLink,
  setNewShortLink,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState();
  const [buttonText, setButtonText] = useState("Copy");
  const baseURL = "https://api.shrtco.de/v2/shorten";

  const shortenLink = (e) => {
    if (textInput === "") {
      setErrorMessage("Please add a link");
      console.log("copy");
    } else {
      Axios.get(`${baseURL}?url=${textInput}`).then((response) => {
        const shortLink = response.data;
        console.log(shortLink);
        setNewShortLink([...newShortLink, shortLink]);
        setNewLongLink([...newLongLink, textInput]);
        setErrorMessage("");
        setTextInput("");
      });
    }
  };

  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };

  useEffect(() => {
    const savedStates = JSON.parse(window.localStorage.getItem("states"));
    setNewLongLink(savedStates?.newLongLink || []);
    setNewShortLink(savedStates?.newShortLink || []);
  }, [setNewLongLink, setNewShortLink]);

  useEffect(() => {
    const states = { newLongLink, newShortLink };
    window.localStorage.setItem("states", JSON.stringify(states));
  });

  return (
    <div className="shortener-section">
      <div className="shortener-container">
        <div className="shortener-input">
          <div className="input">
            <input
              onChange={userInputHandler}
              type="text"
              placeholder="Shorten a link here..."
              value={textInput}
              className={`${errorMessage ? "input-error" : ""}`}
            />
            {errorMessage && <div className="error"> {errorMessage} </div>}
          </div>
          <button onClick={shortenLink} className="shorten-btn">
            Shorten It!
          </button>
        </div>
        <ul className="prev-shortened-links">
          {newLongLink.map((link, index) => (
            <li key={newShortLink[index].result.code}>
              <p className="original-link">{link}</p>
              <div>
                <p className="shortened-link">
                  {newShortLink[index].result.short_link}
                </p>
                <CopyToClipboard
                  onCopy={() => {
                    console.log(copied);
                    setCopied(true);
                    console.log(copied);
                    setTimeout(() => {
                      setCopied(false);
                    }, 3000);
                  }}
                  text={newShortLink[index].result.short_link}
                >
                  <button
                    className=""
                    onClick={(e) => {
                      e.target.innerText = "Copied";
                      e.target.classList.add("active-copy");
                      setTimeout(() => {
                        e.target.innerText = "Copy";
                        e.target.classList.remove("active-copy");
                      }, 3000);
                    }}
                  >
                    {buttonText}
                  </button>
                </CopyToClipboard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shortener;
