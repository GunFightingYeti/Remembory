import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function CharacterList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ClickyPicture({
  src = "https://placehold.it/300x300",
  name,
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={src} />
            <h3>{name}</h3>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
