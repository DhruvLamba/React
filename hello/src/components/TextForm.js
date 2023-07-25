import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  function uppercase() {
    let upper = input;
    setInput(upper.toUpperCase());
  }

  function lowercase() {
    let lower = input;
    setInput(lower.toLowerCase());
  }

  function change(event) {
    setInput(event.target.value);
  }
  const [input, setInput] = useState("Enter Your Text Here");
  return (
    <div className="container">
      <h2>{props.heading}</h2>
      <label for="exampleFormControlTextarea1" class="form-label">
        TextArea
      </label>
      <textarea
        onChange={change}
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="10"
        value={input}
      ></textarea>
      <button className="my-3" onClick={uppercase}>
        Uppercase
      </button>

      <button className="my-3 mx-2" onClick={lowercase}>
        Lowercase
      </button>
    </div>
  );
}
