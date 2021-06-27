import axios from "axios"

const API_KEY = "1a7532c831c19ca759402dbd11644ca2"
const Api = {
  fetchPopularMovies() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`).then((r) => r.data.results)
  },
  fetchMoviesByQuery(query) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US&page=1&include_adult=false`
      )
      .then((r) => r.data.results)
  },
  fetchMoviesById(id) {
    return axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US`)
      .then((r) => r.data)
  },
  fetchMoviesCastById(id) {
    return axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US`)
      .then((r) => r.data.cast)
  },
  fetchMoviesReviewById(id) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US&page=1`
      )
      .then((r) => r.data.results)
  },
}

export default Api
