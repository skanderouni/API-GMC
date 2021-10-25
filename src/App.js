import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import CocktailList from './Pages/CocktailList';
import Cocktail from './Pages/Cocktail';
import About from './Pages/About';
import Error from './Pages/Error';
import './App.css';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Cocktails' component={CocktailList} />
        <Route path='/Cocktails/Cocktail/:idDrink' component={Cocktail} />
        <Route path='/about/:idDrink' component={About} />
        <Route path='/*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
