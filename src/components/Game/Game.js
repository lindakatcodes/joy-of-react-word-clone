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
  
  const [guessList, setGuessList] = React.useState([]);

  function addGuessToList(guessValue) {
    setGuessList([...guessList, guessValue]);
  }

  return (
    <>
      <GuessList guessList={guessList} />
      <GuessInput addGuessToList={addGuessToList} />
    </>
  );
}

export default Game;
