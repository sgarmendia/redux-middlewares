import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import tmdbAPI from './helpers/tmdbAPI';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers';
import { MOVIES } from './actions';

//CUSTOM MIDDLEWARE FUNCTION
const customMiddle = store => {
  return next => {
    return action => {
      switch (action.type) {
        case 'TRENDING_MOVIES':
          tmdbAPI.fetchTrendingMovies()
            .then(items => next({type: MOVIES, items}))
            .catch(err => next({type: 'ERROR', err}))
          break
        case 'GET_MOVIES':
          tmdbAPI.fetchMovieByName(action.name)
            .then(items => next({type: MOVIES, items}))
            .catch(err => next({type: 'ERROR', err}))
          break
        default:
          next(action);
      }
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(customMiddle)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
