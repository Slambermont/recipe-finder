import React, { Component } from 'react';

const app_key = '881905b94637ca383422d5f34594d279';
const app_id = 'fcc1a3cd';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch('https://api.edamam.com/search?app_id=' + app_id + '&app_key=' + app_key + '&q=chicken')
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const hits = this.state.hits;

    return (
      <div>
        { hits.map( hit =>
          <h1>{ hit.recipe.label }</h1>
        )}
      </div>
    );
  }
}

export default Recipes;
