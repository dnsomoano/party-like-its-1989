import React, { Component } from "react";
// This file provides the content that will generate on my HTML webpage. This is the basic most child
// MovieList > Movies > Movie(inner)
class Movie extends Component {
  render() {
    const posterBaseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    return (
      <li className="movie">
        <h2>{this.props.title}</h2>
        <img src={posterBaseUrl + this.props.poster_path} />
        <p>{this.props.overview}</p>
      </li>
    );
  }
}

export default Movie;
