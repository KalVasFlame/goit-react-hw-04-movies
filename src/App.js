import React, { Component, lazy, Suspense } from "react"
import Loader from "react-loader-spinner"
import { Route, Switch } from "react-router-dom"
import routes from "./routes"

import NavBar from "./components/NavBar/NavBar"

const HomeView = lazy(() => import("./views/HomeView/HomeView"))
const MoviesDetailView = lazy(() => import("./views/MoviesDetailView/MoviesDetailView"))
const MoviesView = lazy(() => import("./views/MoviesView/MoviesView"))
const NotFoundView = lazy(() => import("./views/NotFoundView/NotFoundView"))
class App extends Component {
  state = {}
  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<Loader type="Puff" color="#00BFFF" height={500} width={500} timeout={3000} />}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.moviesDetails} component={MoviesDetailView} />
            <Route path={routes.movies} component={MoviesView} />
            <Route exact component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    )
  }
}

export default App
