import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../constants/fishData";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const totalGuess = incorrectCount + correctCount;
  const fishNames = initialFishes.map((fish) => fish.name).slice(totalGuess);
  const gameOver = totalGuess == initialFishes.length;
  return (
    <>
      {!gameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={fishNames}
          />

          <FunctionalGameBoard
            fishData={initialFishes[totalGuess]}
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
          />
        </>
      )}
      {gameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
