import React from 'react'
import './MovieTemplate.css'
export const MovieTemplate = ({ movie }) => {
  return (
    <article className='movieTemplate'>
      <h2>{movie?.title}</h2>
      <div className='imagesContainer'>
        <div className='imageContainer'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        <div className='imageContainer'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
      </div>

      <div className='information'>
        <p> Vote Average: {movie?.vote_average.toLocaleString('es-ES')}</p>
        <p>
          {' '}
          Release :{' '}
          {new Date(movie?.release_date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        <p>{movie?.overview}</p>{' '}
      </div>
    </article>
  )
}
