import { Component } from "react"
import Api from "../../Service/Api"
import defaultImg from "./defaultImg.jpg"

class Cast extends Component {
  state = {
    baseUrl: "https://image.tmdb.org/t/p/w500",
    casts: null,
  }
  componentDidMount() {
    const movieId = this.props.id

    Api.fetchMoviesCastById(movieId).then((r) => this.setState({ casts: r }))
  }

  render() {
    const { casts, baseUrl } = this.state
    return (
      <ul>
        {casts &&
          casts.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              {<img src={profile_path ? baseUrl + profile_path : defaultImg} alt={name} width="100" />}
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
      </ul>
    )
  }
}

export default Cast
