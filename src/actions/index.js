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

//FUNCTIONS FOR CUSTOM MIDDLEWARE
export function asyncGetTrendingMovies() {
  return {
    type: 'TRENDING_MOVIES',
  }
}

export function asyncGetMoviesByName(name) {
  return {
    type: 'GET_MOVIES',
    name
  }
}