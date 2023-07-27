import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [txt, setTxt] = useState("Enable Dark mode");

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      setTxt("Enable Dark mode");
    } else {
      setMode("dark");
      setTxt("Enable Light mode");
    }
  };
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} txt={txt} />
      <TextForm heading={"Enter your text here"} />
      {/* <About /> */}
    </>
  );
}

export default App;
