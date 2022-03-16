import React from 'react'
import { Clock, Star } from 'phosphor-react'
import { Container } from './MovieCard-styles.js'

export function MovieCard(props) {
  function handleFavorito() {
    props.addFavorito(props.movie)
  }

  return (
    <Container className="movie-card">
      <img className="movie-cover" src={props.poster} alt={props.title} />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
            <button onClick={handleFavorito}>
              {props.isFavorite ? 'Desfavoritar' : 'Favoritar'}
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
