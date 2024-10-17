import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { GenreFilter } from '../GenreFilter/GenreFilter'

export const Header = () => {
  const [opened, setOpened] = useState(false)
  const genreRef = useRef(null)

  const handleClickOutside = (event) => {
    if (genreRef.current && !genreRef.current.contains(event.target)) {
      setOpened(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <header>
      <img
        className='logo'
        src='https://res.cloudinary.com/digcf0lad/image/upload/v1711761580/Portafolio/logo_1_1_kczsvy.png'
        alt='logo'
      />
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Movies</NavLink>
          </li>
          <li
            className='genre'
            onClick={(e) => {
              e.stopPropagation()
              setOpened(!opened)
            }}
          >
            Genres {<GenreFilter opened={opened} genreRef={genreRef} />}
          </li>
        </ul>
      </nav>
    </header>
  )
}
