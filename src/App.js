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
        src:  ""
        },
      {
        key: 2,
        name: "Zoe Washburn",
        src:  ""
        },
      {
        key: 3,
        name: "Hobart Washburn",
        src:  ""
        },
      {
        key: 4,
        name: "Jayne Cobb",
        src:  ""
        },
      {
        key: 5,
        name: "Kaylee Frye",
        src:  ""
        },
      {
        key: 6,
        name: "Inera Serra",
        src:  ""
        },
      {
        key: 7,
        name: "River Tam",
        src:  ""
        },
      {
        key: 8,
        name: "Shepard Book",
        src:  ""
        },
      {
        key: 9,
        name: "Simon Tam",
        src:  ""
        },
      {
        key: 10,
        name: "Serenity",
        src: ""
        },
      {
        key: 11,
        name: "YoSafBridge",
        src: ""
        },
      {
        key: 12,
        name: "Badger",
        src: ""
        },
  ]
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
            <Col size="md-12">


              {/* <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form> */}


            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.characters.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
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
              )}
            </Col>
          </Row>
        </Container>
        </div>
    );
  }
}

export default App;
