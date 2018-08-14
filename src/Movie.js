import React, { Component } from "react";
import { isMoment } from "../node_modules/moment";
// This file provides the content that will generate on my HTML webpage. This is the basic most child
// Change in this component for displayed props
// MovieList > Movies > Movie(inner)
class Movie extends Component {
  render() {
    const posterBaseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    return (
      <li className="movie">
        <h2>{this.props.title}</h2>
        <img src={posterBaseUrl + this.props.poster_path} alt="MoviePoster" />
        <p>{this.props.overview}</p>
        <p>{this.props.release_date}</p>
      </li>
    );
  }
}

export default Movie;
