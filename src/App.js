import { GlobalStyle } from './styles/global'

import { useEffect, useState } from 'react'
import { SideBar } from './components/SideBar/SideBar'
import { Content } from './components/Content/Content'
// import { api } from './services/api'
import { movies as moviesData } from './data/data'
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes
} from 'react-router-dom'
import { ContentFavorite } from './components/ContentFavorite/ContentFavorite'

const empty = [
  {
    Title: 'Carregando...',

    Runtime: '...',

    Poster:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg',
    Ratings: [
      {
        Source: '...',
        Value: '...'
      }
    ],
    imdbID: '...'
  },
  {
    Title: 'Carregando...',

    Runtime: '...',

    Poster:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg',
    Ratings: [
      {
        Source: '...',
        Value: '...'
      }
    ],
    imdbID: '...'
  },
  {
    Title: 'Carregando...',

    Runtime: '...',

    Poster:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg',
    Ratings: [
      {
        Source: '...',
        Value: '...'
      }
    ],
    imdbID: '...'
  }
]

function App() {
  const [movies, setMovies] = useState([])

  // on mount pegar dados da api
  // useEffect(() => {
  //   api.get('movies').then(response => {
  //     setMovies([])
  //     setMovies(response.data)
  //   })
  // }, [])

  useEffect(() => {
    setMovies([])
    setMovies(moviesData)
  }, [])

  function handleAdicionarFavoritos(filme) {
    const filmesFavoritados = movies.map(movie => {
      return movie.Title === filme.Title
        ? { ...movie, favorito: !movie.favorito }
        : movie
    })
    setMovies(filmesFavoritados)
    console.log(movies)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SideBar />
                  <Outlet />
                </>
              }
            >
              <Route
                path="/"
                element={
                  <Content
                    movies={movies}
                    handleAdicionarFavoritos={handleAdicionarFavoritos}
                  />
                }
              />
              <Route
                path="/favoritos"
                element={
                  <ContentFavorite
                    movies={movies}
                    handleAdicionarFavoritos={handleAdicionarFavoritos}
                  />
                }
              />
            </Route>
          </Routes>
        </Router>
      </div>
      <GlobalStyle />
    </>
  )
}

export default App
