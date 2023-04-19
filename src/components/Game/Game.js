import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.info({ guess });

    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };

    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);
    setGuess("");
  }

  return (
    <>
      <GuessList guessList={guessList} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
