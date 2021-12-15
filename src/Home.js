import React from "react";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Services from "./components/Services";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Shortener
        // newLongLink={newLongLink}
        // setNewLongLink={setNewLongLink}
        // newShortLink={newShortLink}
        // setNewShortLink={setNewShortLink}
        // textInput={textInput}
        // setTextInput={setTextInput}
        // key={key}
        />
        <Services />
        <BoostLinks />
      </main>
      <Footer />
    </>
  );
};

export default Home;
