import React from "react";

function GuessInput({ addGuessToList, atMaxLength }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    addGuessToList(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        pattern="([A-Z]){5}"
        title="Guess must be 5 letters long"
        disabled={atMaxLength}
      />
      <span className="guess-input-hint">Guess a 5 letter word</span>
    </form>
  );
}

export default GuessInput;
