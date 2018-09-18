import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: '',
    }
    
    this.handleSearch = this.handleSearch.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  handleIngredientChange(event) {
    this.setState({
      ingredient: event.target.value
    });
  }

  handleSearch(event) {
    this.props.searchRecipes(this.state.ingredient);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input onChange={this.handleIngredientChange} />
        <div onClick={this.handleSearch}>Search</div>
      </div>
    )
  }
}

export default SearchBar;
