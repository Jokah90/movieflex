import { useState, useEffect} from 'react'

const App = () => {
  const [movies, setMovies] = useState<string[]>([])

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
  console.log(movies)
  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <section>
      <header>Movie Flex</header>
      <main>

      </main>
    </section>
  )
}

export default App