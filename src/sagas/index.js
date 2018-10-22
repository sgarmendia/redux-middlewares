import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import tmdbAPI from '../helpers/tmdbAPI';

function* asynctrendingMovies() {
  try {
    const items = yield call(tmdbAPI.fetchTrendingMovies)
    yield put({ type: "MOVIES", items });
  } catch (error) {
    console.error(error)
  }
}

function* getMovies() {
  yield takeLatest('TRENDING_MOVIES', asynctrendingMovies)
}

//--------------------------------------------------------------//

function* asyncSearchMovies(action) {
  try {
    const items = yield call(tmdbAPI.fetchMovieByName, action.name)
    yield put({ type: "MOVIES", items });
  } catch (error) {
    console.error(error)
  }
}

function* searchMovies() {
  yield takeLatest('SEARCH_BY_NAME', asyncSearchMovies)
}

//---------------------------------------------------------------//

export default function* rootSaga() {
  yield all([fork(getMovies), fork(searchMovies)])
}