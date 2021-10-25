import React from 'react';
import { Card } from 'react-bootstrap';

const IngrediantCard = ({ cocktail }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={cocktail.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{cocktail.strDrink}</Card.Title>
        <Card.Text>
          <span>{cocktail.strIngredient1}</span>
          <br />
          <span>{cocktail.strIngredient2} </span>
          <br />
          <span>{cocktail.strIngredient3}</span>
          <br />
          <span>{cocktail.strIngredient4}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IngrediantCard;
