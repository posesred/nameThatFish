import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    fishGuess: "",
  };

  render() {
    const { fishGuess } = this.state;
    const { fishData, incrementCorrectCount, incrementIncorrectCount } =
      this.props;
    const handleSubmit = (e) => {
      e.preventDefault();
      const { fishGuess } = this.state;
      const { fishData } = this.props;

      if (fishData.name === fishGuess) {
        incrementCorrectCount();
      } else {
        incrementIncorrectCount();
      }
      this.setState({ fishGuess: "" });
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
            name="fish-guess"
            onChange={(event) => {
              this.setState({ fishGuess: event.target.value });
            }}
            value={fishGuess}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
