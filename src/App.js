import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { Container, Row} from "./components/Grid";
import ClickyPicture from "./components/CharacterList";
import './app.css';
import Characters from './Characters.json';

class App extends Component {
  state = {};

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    console.log("Test!")
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
              {Characters.map(person => {
                return (
                  <div className="col-3">
                    <ClickyPicture
                      key={person.key}  
                      name={person.name}
                      src={person.url}
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
