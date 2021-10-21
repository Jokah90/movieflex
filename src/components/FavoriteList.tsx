import { useRecoilState } from 'recoil'
import favoriteMovies from '../atoms/favorites'
import { subOverView, subReleaseDate } from '../helperFunctions'

import style from '../styles/favoritelist.module.css'

const FavoriteList = () => {

    const [ movies ] = useRecoilState(favoriteMovies)
    console.log(movies);


    return (
        <aside>
            {
            
            movies.map(movie => 
                <section key={movie.id} className={style.wrapper}>
                    <section className={style.moviePoster} style={{ 
                        backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : movie.backdrop_path}")`,
                        backgroundSize: `cover` 
                    }}>
                        
                    </section>
                    <section className={style.movieContainer}>
                        <section className={style.movieTitle}>
                            <section className={style.titleRating}>{`${movie.name || movie.title}`}
                                <section className={style.rating}>
                                <i className="fas fa-star"></i>
                                <p>{movie.vote_average}</p>
                            </section>
                        </section>
                            <section>{`${subReleaseDate(movie.release_date, movie.first_air_date)}`}</section>
                        </section>
                        <section className={style.overview}>
                        {subOverView(movie.overview)}
                        </section>
                    </section>
                </section>
                )
            }
        </aside>
    )
}

export default FavoriteList