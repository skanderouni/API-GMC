import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CocktailCard = ({ cocktail }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/Cocktails/Cocktail/${cocktail.idDrink}`}>
        <Card.Img variant='top' src={cocktail.strDrinkThumb} />
        <Card.Body>
          <Card.Title>{cocktail.strDrink}</Card.Title>
          <Card.Text>
            <span>{cocktail.strCategory}</span>
            <br />
            <span>{cocktail.strAlcoholic} </span>
            <br />
            <span>{cocktail.strGlass}</span>
          </Card.Text>
          <Link to={`/about/${cocktail.idDrink}`}> details</Link>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CocktailCard;
