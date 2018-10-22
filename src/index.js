import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import rootReducer from './reducers';

//TESTING CUSTOM MIDDLEWARE LOGGER FUNCTION
/* const logger = store => {
  return next => {
    return action => {
      console.log(action);
      console.dir(store);
      next(action)
    }
  }
}  */

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
