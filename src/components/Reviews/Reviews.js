import { Component } from "react"
import Api from "../../Service/Api"

class Reviews extends Component {
  state = {
    reviews: null,
  }

  componentDidMount() {
    const { id } = this.props
    const movieId = id
    Api.fetchMoviesReviewById(movieId).then((r) => {
      this.setState({ reviews: r })
    })
  }

  render() {
    const { reviews } = this.state

    return (
      <ul>
        {reviews && reviews.length > 0
          ? reviews.map(({ id, author, content, url }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content.slice(0, 500)}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  ReadMore
                </a>
              </li>
            ))
          : "Sorry no Info"}
      </ul>
    )
  }
}

export default Reviews
