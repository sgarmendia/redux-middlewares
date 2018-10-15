import movies from './moviesReducer';
import favorites from './favoritesReducer';
import { combineReducers } from "redux";

export default combineReducers({
  movies,
  favorites,
})