import React, { Component } from 'react';
import { RecipeAPI } from './RecipeAPI.js';
import RecipeList from './components/RecipeList.js';
import SearchBar from './components/SearchBar.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    };
    this.searchRecipes = this.searchRecipes.bind(this);
  }

  searchRecipes(ingredient) {
    RecipeAPI.search(ingredient).then(recipes => {
      this.setState({
        recipes: recipes
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Recipe Finder</h1>
        <SearchBar searchRecipes={this.searchRecipes} />
        <RecipeList results={this.state.recipes} />
      </div>
    );
  }
}

export default App;
