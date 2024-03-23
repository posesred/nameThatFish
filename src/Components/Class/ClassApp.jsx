import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
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

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    const totalGuess = this.state.incorrectCount + this.state.correctCount;
    const fish = initialFishes.map((fish) => fish.name).slice(totalGuess);
    const gameOver = totalGuess == initialFishes.length;
    const incrementCorrectCount = () => {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    };

    const incrementIncorrectCount = () => {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    };
    //I had a lot of trouble trying to change ths state from the child comp so ended up just passing a function from parent to child that can change it please show me or give me a hint on how to fix this.
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
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              incrementCorrectCount={incrementCorrectCount}
              incrementIncorrectCount={incrementIncorrectCount}
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
