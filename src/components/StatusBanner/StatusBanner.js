import React from "react";

function HappyBanner({ guessCount }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong>
        Got it in
        <strong>
          {guessCount === 1 ? " 1 guess" : ` ${guessCount} guesses`}
        </strong>
        .
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function StatusBanner({ status, guessCount, answer }) {
  return (
    <>
      {status === "won" && <HappyBanner guessCount={guessCount} />}
      {status === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default StatusBanner;
