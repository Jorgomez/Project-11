const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmM3MDg4MDQ5MmMwOGE3MDBjMWQwZmQ1MGNkOGQxYiIsIm5iZiI6MTcyODU4OTE0NC4wMjM0MjYsInN1YiI6IjY3MDgyYTFjMjAwYjUzODhiNTU2NWQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nUYp742f7a_jI-139h73B6fF-C-NGwERUugfJFXBv0Y'

const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_TOKEN
  }
}
export const fetchGenerator = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, defaultOptions)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const text = await response.text()
    const data = JSON.parse(text)
    return data
  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}
