import { Component } from "react"
import MoviesList from "../../components/MoviesList/MoviesList"
import Api from "../../Service/Api"

class HomeView extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    Api.fetchPopularMovies().then((r) => this.setState({ movies: [...r] }))
  }

  render() {
    const { movies } = this.state
    return <MoviesList movies={movies} />
  }
}

export default HomeView
