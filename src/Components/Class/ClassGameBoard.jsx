import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    fishGuess: "",
    imgNumber: 0,
  };

  render() {
    const { imgNumber } = this.state;
    const { initialFishes } = this.props;
    const nextFishToName = initialFishes[imgNumber];
    const { fishGuess } = this.state;
    const { incrementCorrectCount, incrementIncorrectCount, removeFish, fish } =
      this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={nextFishToName ? nextFishToName.url : ""}
            alt={nextFishToName ? nextFishToName.name : "No more fish"}
          />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(event) => {
            event.preventDefault();

            removeFish(fish[1]);

            if (fishGuess === nextFishToName.name) {
              incrementCorrectCount();
              this.setState({
                fishGuess: "",
              });
            } else {
              incrementIncorrectCount();
              this.setState({
                fishGuess: "",
              });
              this.setState((prevState) => ({
                imgNumber: prevState.imgNumber + 1,
              }));
            }
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={(event) => {
              this.setState({ fishGuess: event.target.value });
            }}
            value={this.state.fishGuess}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
