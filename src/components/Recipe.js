import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.result.label}
        </h1>
      </div>
    )
  }
}

export default Recipe;
