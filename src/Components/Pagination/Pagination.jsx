import React from 'react'
import './Pagination.css'

export const Pagination = ({ page, setPage, finalPage }) => {
  return (
    <div className='pagination'>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {'<'}
      </button>
      <p>{page}</p>
      <button disabled={page === finalPage} onClick={() => setPage(page + 1)}>
        {' '}
        {'>'}
      </button>
    </div>
  )
}
