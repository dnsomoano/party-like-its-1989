import React, { Component } from "react";
import Movie from "./Movie";
import movies from "./1989.json";

class MovieList extends Component {
  render() {
    return (
      <section className="MovieList">
        <ul>
          {movies.results
            .sort((a, b) => {
              if (a.release_date < b.release_date) {
                return -1;
              } else if (a.release_date > b.release_date) {
                return 1;
              } else {
                return 0;
              }
            })
            .map((movie, idx) => {
              return (
                // mapped array tags must match json props
                <Movie
                  title={movie.title}
                  poster_path={movie.poster_path}
                  overview={movie.overview}
                  release_date={movie.release_date}
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
