import React, { Component } from 'react';

const APP_KEY = '881905b94637ca383422d5f34594d279';
const APP_ID = 'fcc1a3cd';
const API = 'https://api.edamam.com/search?app_id=' + APP_ID + '&app_key=' + APP_KEY;

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + '&q=chicken')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false}))
  }

  render() {
    const hits = this.state.hits;

    if ( error ) {
      return <p>{this.state.error.message}</p>;
    }

    if ( this.state.isLoading ) {
      return <p>Loading...</p>;
    }

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
