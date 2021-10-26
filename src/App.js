import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import "./styles/app.scss";

function App() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="App">
      <Nav menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Home
      // newLongLink={newLongLink}
      // setNewLongLink={setNewLongLink}
      // newShortLink={newShortLink}
      // setNewShortLink={setNewShortLink}
      // textInput={textInput}
      // setTextInput={setTextInput}
      // key={key}
      />
    </div>
  );
}

export default App;
