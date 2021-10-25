import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CocktailCard from '../Component/CocktailCard.js/CocktailCard';
import { Button } from 'react-bootstrap';
const Cocktail = () => {
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  let { idDrink } = useParams();
  let { goBack } = useHistory();
  const getCocktail = async () => {
    try {
      let result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );
      setCocktail(result.data);
      console.log(result);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : isError ? (
        <h1>error to fetch</h1>
      ) : (
        cocktail.drinks.map((e) => (
          <CocktailCard cocktail={e} key={e.idDrink} />
        ))
      )}
      <Button onClick={() => goBack()}>Go back</Button>
    </div>
  );
};

export default Cocktail;
