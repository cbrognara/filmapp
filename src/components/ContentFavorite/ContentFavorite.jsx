// import { api } from '../../services/api'
import { MovieCard } from '../MovieCard/MovieCard'
import { Container } from './ContentFavorite-styles.js'

export function ContentFavorite({ movies, handleAdicionarFavoritos }) {
  const favoriteList = movies.filter(item => item.favorito)

  function addFavorito(movie) {
    handleAdicionarFavoritos(movie)
  }

  return (
    <Container>
      <header>
        <span className="category">
          Seus favoritos<span> {movies.Title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {favoriteList.length < 1 ? (
            <h2>Você ainda não favoritou nenhum filme :/ </h2>
          ) : (
            favoriteList.map(movie => (
              <MovieCard
                movie={movie}
                addFavorito={addFavorito}
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
                isFavorite={movie.favorito}
              />
            ))
          )}
        </div>
      </main>
    </Container>
  )
}
