import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

// hadn't thought of this - having another "component" within the same file
function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
