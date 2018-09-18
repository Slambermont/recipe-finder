import React, { Component } from 'react';
import Recipe from './Recipe.js';

class RecipeList extends Component {
  render() {
    return (
      <div>{ this.props.results.map((result, index) =>
          <Recipe key={index} result={result.recipe} />
        )}
      </div>
    )
  }
}

export default RecipeList;
