function tmdbAPI() {
  const BASE_URL="https://api.themoviedb.org/3"

  function fetchMovieByName(name) {
    const url = `${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`
    return new Promise ((resolve,reject) => {
      fetch(url)
        .then(res => res.json())
        .then(({ results }) => resolve(results))
        .catch(err => reject(err))
    })
  }

  function fetchTrendingMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    return new Promise ((resolve,reject) => {
      fetch(url)
        .then(res => res.json())
        .then(({ results }) => resolve(results))
        .catch(err => reject(err))
    })
  }

  return {
    fetchMovieByName,
    fetchTrendingMovies,
  }
}

export default tmdbAPI()