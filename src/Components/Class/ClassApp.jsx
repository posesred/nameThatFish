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
    fish: initialFishes.map((fish) => fish.name),
  };
  incrementCorrectCount = () => {
    this.setState((prevState) => ({
      correctCount: prevState.correctCount + 1,
    }));
  };

  incrementIncorrectCount = () => {
    this.setState((prevState) => ({
      incorrectCount: prevState.incorrectCount + 1,
    }));
  };

  removeFish = (fishName) => {
    this.setState((prevState) => ({
      fish: prevState.fish.filter(
        (f) => f.toLowerCase() !== fishName.toLowerCase()
      ),
    }));
  };
  render() {
    return (
      <>
        <>
          <ClassScoreBoard
            answersLeft={this.state.fish}
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
          />
          <ClassGameBoard
            initialFishes={initialFishes}
            fish={this.state.fish}
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
            incrementCorrectCount={this.incrementCorrectCount}
            incrementIncorrectCount={this.incrementIncorrectCount}
            removeFish={this.removeFish}
          />
        </>
        {this.state.correctCount + this.state.incorrectCount >=
          initialFishes.length && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
          />
        )}
      </>
    );
  }
}
