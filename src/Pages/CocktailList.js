import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CocktailCard from '../Component/CocktailCard.js/CocktailCard';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [load, setLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getCocktailList();
  }, []);
  const getCocktailList = async () => {
    try {
      let result = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      );
      setCocktails(result.data);
      setLoad(false);
    } catch (error) {
      setIsError(true);
      setLoad(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      {load ? (
        <h1>loading</h1>
      ) : isError ? (
        <h1>error to fetch</h1>
      ) : (
        cocktails.drinks.map((e) => (
          <CocktailCard cocktail={e} key={e.idDrink} />
        ))
      )}{' '}
    </div>
  );
};

export default CocktailList;
