import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants/fishData";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleAnswer = (answer) => {
    const currentIndex = this.state.correctCount + this.state.incorrectCount;
    this.setState((cur) => {
      return answer === initialFishes[currentIndex].name
        ? { correctCount: cur.correctCount + 1 }
        : { incorrectCount: cur.incorrectCount + 1 };
    });
  };

  render() {
    const totalGuess = this.state.incorrectCount + this.state.correctCount;
    const fish = initialFishes.map((fish) => fish.name).slice(totalGuess);
    const gameOver = totalGuess == initialFishes.length;

    return (
      <>
        {!gameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              answersLeft={fish}
            />
            <ClassGameBoard
              fishData={initialFishes[totalGuess]}
              handleAnswer={this.handleAnswer}
            />
          </>
        )}
        {gameOver && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
