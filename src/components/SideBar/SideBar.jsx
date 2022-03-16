import React from 'react'
import { Button } from '../Button/Button'
import { BtnContainer, Nav } from './SideBar-styles.js'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export function SideBar() {
  return (
    <Nav className="sidebar">
      <span>
        Film<span>App</span>
      </span>
      <BtnContainer>
        <Link to="/">
          <Button iconName="home">Todos os Filmes</Button>
        </Link>

        <Link to="/favoritos">
          <Button iconName="favoritos">Favoritos</Button>
        </Link>
      </BtnContainer>

      <Footer />
    </Nav>
  )
}
