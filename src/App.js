import React, { Component } from 'react';
import MovieResults from './components/MovieResults';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
        <br/>
          <div className="jumbotron">
            <h1>React Movie App</h1>
            <p>Simple application to test several technologies in react</p>
          </div>
        </div>
        <div className="row">
          <MovieResults />
        </div>
      </div>
    );
  }
}

export default App;
