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
          if (fishGuess === nextFishToName.name) {
            const newFish = fish.filter(
              (f) => f.toLowerCase() !== fishGuess.toLowerCase()
            );
            setFish(newFish);
            setCorrectCount(correctCount + 1);
          } else {
            setIncorrectCount(incorrectCount + 1);
          }
          setFishGuess("");
          setImgNumber((prevNumber) => prevNumber + 1);
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
