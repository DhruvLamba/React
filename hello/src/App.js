import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <TextForm heading={"Enter your text here"} />
    </>
  );
}

export default App;
