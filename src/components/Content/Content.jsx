import { useState } from 'react'
// import { api } from '../../services/api'
import { MovieCard } from '../MovieCard/MovieCard'
import { Container } from './Content-styles.js'
import { Input } from './InputSearch-styles'

export function Content({ movies, handleAdicionarFavoritos }) {
  const [search, setSearch] = useState('')

  //logica do input busca
  const moviesFilter = movies.filter(movie =>
    movie.Title.toLowerCase().includes(search.toLowerCase())
  )

  //handle search input
  function handleChange(event) {
    setSearch(event.target.value)
  }

  function addFavorito(movie) {
    handleAdicionarFavoritos(movie)
  }

  return (
    <Container>
      <header>
        <span className="category">
          Encontre seu Filme<span> {movies.Title}</span>
        </span>
        <Input
          type="search"
          placeholder="Buscar"
          value={search}
          onChange={handleChange}
        />
      </header>

      <main>
        <div className="movies-list">
          {moviesFilter.length < 1 ? (
            <h2>Não encontramos nenhum filme com esse nome :/</h2>
          ) : (
            moviesFilter.map(movie => (
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
