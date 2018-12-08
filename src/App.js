import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { Container, Row} from "./components/Grid";
import ClickyPicture from "./components/CharacterList";
import './app.css';
import Characters from './Characters.json';

class App extends Component {
  state = {
    guessed: [],
    Characters,
    score: 0,
    highscore: 0,
    result: "Click a button to start!",
    shake: ""
  };

  componentDidMount() {
    this.setState({Characters: this.shuffle(Characters)})
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  shuffle = (data)=> {
    let newCharacters = data.sort(function(a,b) { return 0.5 - Math.random()});
    return newCharacters;
  }

  handleClick = (event) => {
    // Add each button that is clicked to an array
    this.setState ({
      guessed: [...this.state.guessed, event.target.alt]
    })

    // Check to see if the button has been pressed before
    // If you're wrong
    if (this.state.guessed.includes(event.target.alt)) {
      this.setState ({
        Characters: this.shuffle(this.state.Characters),
        result: "Wrong, try again!",
        shake: "shake",
        score: 0,
        guessed: []
    })
    // If you're right
    } else {
      this.setState({
        Characters: this.shuffle(this.state.Characters),
        result: "You guessed correctly!",
        score: this.state.score + 1,
        shake: "",
      });

      // If you reach a new highscore
      if (this.state.score >= this.state.highscore) {
      this.setState({highscore: this.state.highscore + 1})
      }
  
      // If you win
      if (this.state.score === 11) {
        this.setState({
          Characters: this.shuffle(this.state.Characters),
          result: "Great job, you win!!!",
          score: 0,
          guessed: []
        });
    }
  }
}

  render() {
    return (
      <div className="App">
      <Nav result={this.state.result} score={this.state.score} highscore={this.state.highscore}/>
        <Jumbotron />
        <Container>
          <Row>
              {this.state.Characters.map(character => {
                return (
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ClickyPicture
                      unique={character.key}
                      name={character.name}
                      src={character.url}
                      clicked={character.clicked}
                      Check={this.handleClick}
                      shake={this.state.shake}
                      />
                  </div>
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
