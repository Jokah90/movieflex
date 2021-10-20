import { useEffect} from 'react'
import { useRecoilState } from 'recoil'
import moviesAtom from './atoms/movies'
import CardGrid from './components/CardGrid'
import SearchField from './components/SearchField'
import Navbar from './components/Navbar'
import './App.css'
import FavoriteList from './components/FavoriteList'
import { Switch, Route } from 'react-router'

const App = () => {
  const [movies, setMovies] = useRecoilState(moviesAtom)

  const fetchMovies = async(search: string) => {

    const api_key = '0493315db205d26d27cfee3b1956d4d0'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search}&page=${'1'}&include_adult=false`
    const trending_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`

    try {
      
      if (search === '') {
        const response = await fetch(trending_url)
        const json = await response.json()
        setMovies(json.results)
      } else {
        const response = await fetch(url)
        const json = await response.json()
        setMovies(json.results)
      }

    } catch(err) {
      console.error(err);
    }
  }

useEffect(() => {
  fetchMovies('')
 }, [])

  return (
    <section>
      <header>Movie Flex</header>
      <main>
        
        <SearchField fetchMovies={fetchMovies} />
        <Navbar />

          {/* Routes */}
        <Switch>
          <Route path="/" exact>  <CardGrid movies={movies}/> </Route>
          <Route path="/favorites">  <FavoriteList />  </Route>
        </Switch>
      </main>
    </section>
  )
}

export default App