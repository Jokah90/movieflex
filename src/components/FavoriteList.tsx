import { useRecoilState } from 'recoil'
import favoriteMovies from '../atoms/favorites'

const FavoriteList = () => {

    const [ movies ] = useRecoilState(favoriteMovies)

    console.log(movies);


    return (
        <aside>
            {
            
            movies.map(movie => 
                <section>
                    <section style={{ 
                        backgroundImage: `url("${movie.poster_path || movie.backdrop_path}")`,
                        backgroundSize: `cover` 
                    }}>
                        
                    </section>
                    <section>
                        {movie.name || movie.title}
                    </section>
                    <section>
                        {movie.first_air_date || movie.release_date}
                    </section>

                </section>)
            }
        </aside>
    )
}

export default FavoriteList