import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import { CharacterList, ClickyPicture } from "./components/CharacterList";
import './app.css';

class App extends Component {
  state = {
    characters: [
      {
        key: 1,
        name: "Malcolm Reynolds",
        src:  "./src/components/images/mal.jpg"
        },
      {
        key: 2,
        name: "Zoe Washburne",
        src:  "./src/components/images/zoe.jpg"
        },
      {
        key: 3,
        name: "Hobart Washburne",
        src:  "./src/components/images/wash.jpg"
        },
      {
        key: 4,
        name: "Jayne Cobb",
        src:  "./src/components/images/jayne.jpg"
        },
      {
        key: 5,
        name: "Kaylee Frye",
        src:  "./components/images/kaylee.jpg"
        },
      {
        key: 6,
        name: "Inara Serra",
        src:  "/src/components/images/inara.jpg"
        },
      {
        key: 7,
        name: "River Tam",
        src:  "./src/components/images/river.jpg"
        },
      {
        key: 8,
        name: "Shepard Book",
        src:  "./src/components/images/book.jpg"
        },
      {
        key: 9,
        name: "Simon Tam",
        src:  "./src/components/images/simon.jpg"
        },
      {
        key: 10,
        name: "Serenity",
        src: "./src/components/images/serenity.jpg"
        },
      {
        key: 11,
        name: "YoSaffBridge",
        src: "./src/components/images/yosaffbridge.jpg"
        },
      {
        key: 12,
        name: "Badger",
        src: "./src/components/images/badger.jpg"
        },
  ]
  };

  // handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getRecipes(this.state.recipeSearch)
  //     .then(res => this.setState({ recipes: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="12">
                <CharacterList>
                  {this.state.characters.map(person => {
                    return (
                      <ClickyPicture
                        key={person.key}  
                        name={person.name}
                        src={person.src}
                      />
                    );
                  })}
                </CharacterList>
            </Col>
          </Row>
        </Container>
        </div>
    );
  }
}

export default App;
