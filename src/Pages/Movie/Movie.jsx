import React, { useEffect, useState } from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'
import { MovieTemplate } from '../../Components/MovieTemplate/MovieTemplate'

import { fetchGenerator } from '../../utils/API/fetchGenerator'
import { Loading } from '../../Components/Loading/Loading'

export const Movie = () => {
  const [movie, setMovie] = useState()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetchGenerator(`movie/${id}&language=en-US`).then((res) => {
      setMovie(res), setLoading(false)
    })
  }, [])

  return (
    <main className='movie'>
      {loading && <Loading />}
      <MovieTemplate movie={movie} />
    </main>
  )
}
