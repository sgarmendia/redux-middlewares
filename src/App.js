import React, { Component } from 'react';
import MovieResults from './components/MovieResults';
import Favorites from './components/Favorites';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
        <Router>
          <Switch>
            <Route exact strict path='/' component={MovieResults} />
            <Route exact strict path='/favorites' component={Favorites} />
          </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
