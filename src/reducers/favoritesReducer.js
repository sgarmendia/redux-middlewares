import { ADD_FAV, REMOVE_FAV } from "../actions";

export default (state=[], action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...state, action.item];
    case REMOVE_FAV:
      return state.filter(movie => movie.id !== action.item.id);
    default:
      return state;
  }
}