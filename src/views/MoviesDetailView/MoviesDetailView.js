import { Component, Suspense, lazy } from "react"
import Api from "../../Service/Api"
import Loader from "react-loader-spinner"

import { NavLink, Route } from "react-router-dom"
import MovieDetail from "../../components/MovieDetail/MovieDetail"

import routes from "../../routes"

const Cast = lazy(() => import("../../components/Cast/Cast"))
const Reviews = lazy(() => import("../../components/Reviews/Reviews"))

class MoviesDetailView extends Component {
  state = {
    base_url: "https://image.tmdb.org/t/p/w500",
    id: null,
    poster_path: null,
    original_title: null,
    overview: null,
    release_date: null,
    vote_average: null,
    genres: null,
  }

  componentDidMount() {
    const movieId = this.props.match.params.moviesId
    Api.fetchMoviesById(movieId).then((r) =>
      this.setState({
        ...r,
      })
    )
  }

  onBackBtnClick = () => {
    const { location, history } = this.props
    history.push(location?.state?.from || routes.home)
  }

  render() {
    const movieId = Number(this.props.match.params.moviesId)
    const { base_url, original_title, poster_path, overview, genres, vote_average } = this.state
    const { match } = this.props

    const { from } = this?.props?.location?.state || {
      from: { pathname: "/" },
    }
    console.log("history", this.props.history.location.state)
    console.log("location", this.props.location.state)
    return (
      <>
        <button type="button" onClick={this.onBackBtnClick}>
          Back
        </button>
        <MovieDetail
          baseUrl={base_url}
          title={original_title}
          url={poster_path}
          descr={overview}
          genres={genres}
          vote={vote_average}
        />
        <div>
          <p>Information</p>
          <ul>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: from,
                },
              }}
            >
              <li>Cast</li>
            </NavLink>
            <NavLink
              to={{
                pathname: `${match.url}/review`,
                state: {
                  from: from,
                },
              }}
            >
              <li>Reviews</li>
            </NavLink>
          </ul>
          <Suspense fallback={<Loader type="Puff" color="#00BFFF" height={500} width={500} timeout={3000} />}>
            <Route path={`${match.path}/cast`} render={() => <Cast id={movieId} />} />
            <Route path={`${match.path}/review`} render={() => <Reviews id={movieId} />} />
          </Suspense>
        </div>
      </>
    )
  }
}

export default MoviesDetailView
