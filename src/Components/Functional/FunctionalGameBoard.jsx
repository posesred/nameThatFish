import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({
  initialFishes,
  fish,
  setFish,
  setCorrectCount,
  correctCount,
  setIncorrectCount,
  incorrectCount,
}) {
  const [imgNumber, setImgNumber] = useState(0);
  const nextFishToName = initialFishes[imgNumber];
  const [fishGuess, setFishGuess] = useState("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setFish(fish.slice(1));

          if (fishGuess === nextFishToName.name) {
            setCorrectCount(correctCount + 1);
          } else {
            setIncorrectCount(incorrectCount + 1);
          }
          setFishGuess("");
          setImgNumber(imgNumber + 1);
        }}
      >
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
