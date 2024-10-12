import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './GenreFilter.css'
import { fetchGenerator } from '../../utils/API/fetchGenerator'
export const GenreFilter = ({ opened, genreRef }) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetchGenerator('genre/movie/list?language=en').then((res) =>
      setGenres(res.genres)
    )
  }, [])

  return (
    <aside
      ref={genreRef}
      className='genres'
      style={{ display: opened ? 'flex' : 'none' }}
    >
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link to={`/genre/${genre.id}`} className='genreLink'>
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
