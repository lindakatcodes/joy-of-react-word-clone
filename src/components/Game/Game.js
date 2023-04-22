import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import StatusBanner from "../StatusBanner/StatusBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("running");
  const [atMaxLength, setAtMaxLength] = React.useState(false);

  function addGuessToList(guessValue) {
    if (atMaxLength) return;
    setGuessList([...guessList, guessValue]);
    checkGameStatus(guessValue);
  }

  function checkGameStatus(guess) {
    const guessedRight = guess === answer;
    if (guessedRight) {
      setStatus("won");
      setAtMaxLength(true);
      return;
    }

    if (!guessedRight && guessList.length === 5) {
      setStatus("lost");
      setAtMaxLength(true);
      return;
    }
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput addGuessToList={addGuessToList} atMaxLength={atMaxLength} />
      <StatusBanner
        status={status}
        guessCount={guessList.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
