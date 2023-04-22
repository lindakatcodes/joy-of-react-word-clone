import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const results = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <span className={`cell ${value && results[num].status}`} key={num}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
