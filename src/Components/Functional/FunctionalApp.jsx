import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";
const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [fish, setFish] = useState(initialFishes.map((fish) => fish.name));
  const startingFishAmount = initialFishes.length;
  const totalGuess = incorrectCount + correctCount;
  return (
    <>
      <FunctionalScoreBoard
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        answersLeft={fish}
      />
      {totalGuess < startingFishAmount && (
        <FunctionalGameBoard
          initialFishes={initialFishes}
          fish={fish}
          setFish={setFish}
          correctCount={correctCount}
          setCorrectCount={setCorrectCount}
          incorrectCount={incorrectCount}
          setIncorrectCount={setIncorrectCount}
        />
      )}

      {totalGuess >= startingFishAmount && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={startingFishAmount}
        />
      )}
    </>
  );
}
