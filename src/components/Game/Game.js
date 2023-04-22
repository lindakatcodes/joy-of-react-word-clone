import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function addGuessToList(guessValue) {
    const nextGuessList = [...guessList, guessValue];
    setGuessList(nextGuessList);
    if (guessValue === answer) {
      setGameStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput addGuessToList={addGuessToList} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
