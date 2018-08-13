import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";

class App extends Component {
  render() {
    const title = "Best Movies of 1989";
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>{title}</h1>
          <MovieList />
        </header>
      </div>
    );
  }
}

export default App;
