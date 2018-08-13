import React, { Component } from "react";
import Movie from "./Movie";
import movies from "./1989.json";

class MovieList extends Component {
  render() {
    return (
      <section className="MovieList">
        <ul>
          {movies.results.map((movie, idx) => {
            return (
              <Movie
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overview}
                key={idx}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default MovieList;
