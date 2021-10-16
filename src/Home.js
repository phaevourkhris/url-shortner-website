import React from "react";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Services from "./components/Services";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";

const Home = ({
  newLongLink,
  setNewLongLink,
  textInput,
  setTextInput,
  newShortLink,
  setNewShortLink,
}) => {
  return (
    <div>
      <Hero />
      <Shortener
        newLongLink={newLongLink}
        setNewLongLink={setNewLongLink}
        newShortLink={newShortLink}
        setNewShortLink={setNewShortLink}
        textInput={textInput}
        setTextInput={setTextInput}
      />
      <Services />
      <BoostLinks />
      <Footer />
    </div>
  );
};

export default Home;
