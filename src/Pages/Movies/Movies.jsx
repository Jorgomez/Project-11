import React, { useEffect, useState } from 'react'
import './Movies.css'
import { MovieCard } from '../../Components/MovieCard/MovieCard'
import { Pagination } from '../../Components/Pagination/Pagination'
import { Link } from 'react-router-dom'

import { fetchGenerator } from '../../utils/API/fetchGenerator'
import { Loading } from '../../Components/Loading/Loading'

export const Movies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetchGenerator(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}`
    ).then((res) => {
      setMovies(res.results)
      setLimit(res.total_pages)
      setLoading(false)
    })
  }, [page])

  return (
    <main className='movies'>
      <h2>All Movies</h2>
      {loading && <Loading />}
      <section className='moviesContainer'>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className='movieLink'>
            <MovieCard movie={movie} key={movie.id} />
          </Link>
        ))}
      </section>
      <Pagination page={page} setPage={setPage} finalPage={limit} />
    </main>
  )
}
