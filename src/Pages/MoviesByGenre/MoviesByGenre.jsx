import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MovieCard } from '../../Components/MovieCard/MovieCard'
import { Pagination } from '../../Components/Pagination/Pagination'
import { fetchGenerator } from '../../utils/API/fetchGenerator'
import './MoviesByGenre.css'
import { Loading } from '../../Components/Loading/Loading'

export const MoviesByGenre = () => {
  const [genreMovies, setGenreMovies] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1)
  const { genreId } = useParams()
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchGenerator(
      `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`
    ).then((res) => {
      setGenreMovies(res.results), setLimit(res.total_pages), setLoading(false)
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page, genreId])

  useEffect(() => {
    const fetchGenres = () => {
      fetchGenerator('genre/movie/list?language=en').then((res) =>
        setGenres(res.genres)
      )
    }
    fetchGenres()
  }, [])

  const genreName = genres.find((genre) => genre.id === parseInt(genreId))?.name

  return (
    <main className='moviesByGenre'>
      {loading && <Loading />}
      <h2>{genreName ? `${genreName} Movies` : 'Movies'}</h2>
      <section className='moviesContainer'>
        {genreMovies.map((genreMovie) => (
          <Link
            key={genreMovie.id}
            to={`/movie/${genreMovie.id}`}
            className='movieLink'
          >
            <MovieCard movie={genreMovie} key={genreMovie.id} />
          </Link>
        ))}
      </section>
      <Pagination page={page} setPage={setPage} finalPage={limit} />
    </main>
  )
}
