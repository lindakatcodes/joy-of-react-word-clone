import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guessList }) {
  const renderArrays = range(NUM_OF_GUESSES_ALLOWED).map((place) =>
    guessList[place] ? guessList[place] : ""
  );

  return (
    <div className="guess-results">
      {renderArrays.map((guess, index) => (
        <Guess value={guess} key={index} />
      ))}
    </div>
  );
}

export default GuessList;
