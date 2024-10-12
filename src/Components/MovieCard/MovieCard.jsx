import React from 'react'
import './MovieCard.css'
export const MovieCard = ({ movie }) => {
  return (
    <>
      <article className='movieCard'>
        <div className='description'>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
        </div>
        <div className='imgWrp'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            key={movie.id}
            alt={movie.title}
          />
        </div>
      </article>
    </>
  )
}
