import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({
  fishData,
  setCorrectCount,
  setIncorrectCount,
}) {
  const [fishGuess, setFishGuess] = useState("");

  const guessTheFish = (answer) => {
    if (fishData.name === answer) {
      setCorrectCount((curState) => curState + 1);
    } else {
      setIncorrectCount((curState) => curState + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guessTheFish(fishGuess);
    setFishGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          id="fish-guess"
          name="fish-guess"
          onChange={(e) => setFishGuess(e.target.value)}
          value={fishGuess}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
