import { Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import IngrediantCard from '../Component/IngrediantCard/IngrediantCard';

const About = () => {
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  let { idDrink } = useParams();
  let { goBack } = useHistory();
  useEffect(() => {
    getIngrediant();
  }, []);
  const getIngrediant = async () => {
    try {
      let result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );
      setCocktail(result.data);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <img
          src='https://cdn1.iconfinder.com/data/icons/system-preferences/320/loading_loader_progress_wait_spinner_load-512.png'
          alt='loading'
        />
      ) : isError ? (
        <h1>error to handle</h1>
      ) : (
        cocktail.drinks.map((e) => (
          <IngrediantCard cocktail={e} key={e.idDrink} />
        ))
      )}
      <Button onClick={() => goBack()}>Go Back</Button>
    </div>
  );
};

export default About;
