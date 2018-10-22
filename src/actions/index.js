import tmdbAPI from '../helpers/tmdbAPI';
export const MOVIES = 'MOVIES'
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'

export function moviesToStore(items) {
  return {
    type: MOVIES,
    items
  }
}

export function addToFavorites(item) {
  return {
    type: ADD_FAV,
    item
  }
}

export function removeFromFavorites(item) {
  return {
    type: REMOVE_FAV,
    item
  }
}

//FUNCTIONS USED WITH REDUX THUNK
export function asyncAddMovies(items) {
  return {
    type: MOVIES,
    items
  }
}

export const getTrendingMovies = () => async dispatch => {
  try {
    const movies = await tmdbAPI.fetchTrendingMovies()
    dispatch(asyncAddMovies(movies))
  } catch (error) {
    console.error(error)
  }
}

export const getMoviesByName = (name) => async dispatch => {
  try {
    const movies = await tmdbAPI.fetchMovieByName(name)
    dispatch(asyncAddMovies(movies))
  } catch (error) {
    console.error(error)
  }
}