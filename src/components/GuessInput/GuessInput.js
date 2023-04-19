import React from "react";

function GuessInput() {

  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.info({ guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        pattern="([A-Z]){5}"
        title="Guess must be 5 letters long"
      />
      <span className="guess-input-hint">Guess a 5 letter word</span>
    </form>
  );
}

export default GuessInput;
