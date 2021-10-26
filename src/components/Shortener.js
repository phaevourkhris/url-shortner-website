import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import ClipLoader from "react-spinners";

const Shortener = () => {
  const [newLongLink, setNewLongLink] = useState([]);
  const [newShortLink, setNewShortLink] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState();
  const [buttonText, setButtonText] = useState("Copy");
  const [isloading, setIsLoading] = useState(false);
  const baseURL = "https://api.shrtco.de/v2/shorten";

  //Functions

  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const shortenLink = (e) => {
    if (textInput === "") {
      setErrorMessage("Please add a link");
      console.log("copy");
    } else {
      setIsLoading(!isloading);
      Axios.get(`${baseURL}?url=${textInput}`).then((response) => {
        const shortLink = response.data.result.short_link;
        setNewShortLink([
          ...newShortLink,
          { id: Math.random(), value: shortLink },
        ]);
        // console.log("shortlink:", newShortLink);
        setNewLongLink([
          ...newLongLink,
          { id: Math.random(), value: textInput },
        ]);
        setErrorMessage("");
        setTextInput("");
        setIsLoading(false);
      });
    }
  };

  const delItem = (shortLinkID, longLinkID) => {
    setNewShortLink(
      newShortLink.filter((obj) => obj.id !== Number(shortLinkID))
    );
    setNewLongLink(newLongLink.filter((obj) => obj.id !== Number(longLinkID)));
  };

  //UseEffects

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
          <button
            onClick={shortenLink}
            className="shorten-btn"
            disabled={isloading}
          >
            {isloading && (
              <i
                className="fa fa-spinner fa-lg fa-spin"
                // style="color: red;"
              ></i>
            )}
            Shorten It!
          </button>
        </div>
        <ul className="prev-shortened-links">
          {newLongLink.map((obj, index) => (
            <li key={index} id={index} className="link-item">
              <p id={obj.id} className="original-link">
                {obj.value}
              </p>
              <div className="shortLink-div">
                <p id={newShortLink[index].id} className="shortened-link">
                  {newShortLink[index].value}
                </p>
                <div className="btns">
                  <CopyToClipboard
                    text={newShortLink[index].value}
                    onCopy={() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 3000);
                    }}
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
                  <button
                    className="del-btn"
                    onClick={(e) =>
                      delItem(
                        e.target.parentNode.firstChild.id,
                        e.target.parentNode.parentNode.previousSibling.id
                      )
                    }
                  >
                    <i className="fas fa-trash-alt"></i>Del
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shortener;
