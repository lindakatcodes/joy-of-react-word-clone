import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

function Guess({ value }) {
  const splitLetters = value
    ? value.split("")
    : range(WORD_LENGTH).map((val) => "");

  return (
    <p className="guess">
      {splitLetters.map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
