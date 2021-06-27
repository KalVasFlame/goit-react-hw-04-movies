import React from "react"

const MovieDetail = ({ baseUrl, title, url, descr, genres, vote }) => {
  return (
    <div>
      <h2>{title}</h2>
      {url && <img src={baseUrl + url} alt={title} />}
      <p>{descr}</p>
      <ul>{genres && genres.map((i) => <li key={i.id}>{i.name}</li>)}</ul>
      <p>{vote}</p>
    </div>
  )
}

export default MovieDetail
