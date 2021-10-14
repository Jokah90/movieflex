import { useState, useEffect} from 'react'
import { MovieProps } from './models/MovieProps'
import CardGrid from './components/CardGrid'

const App = () => {
  const [movies, setMovies] = useState<MovieProps[]>([])

  const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
  const key = '0493315db205d26d27cfee3b1956d4d0'

  const fetchMovies = async() => {
    try {
      const response = await fetch(url + key)
      const json = await response.json()
      setMovies(json.results)
      
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <section>
      <header>Movie Flex</header>
      <main>
        <CardGrid props={movies}/>
      </main>
    </section>
  )
}

export default App