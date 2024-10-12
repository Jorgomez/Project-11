import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Movies } from './Pages/Movies/Movies'
import { Header } from './Components/Header/Header'
import { Movie } from './Pages/Movie/Movie'
import { GenreFilter } from './Components/GenreFilter/GenreFilter'
import { MoviesByGenre } from './Pages/MoviesByGenre/MoviesByGenre'
import { Footer } from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/genre/:genreId' element={<MoviesByGenre />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
