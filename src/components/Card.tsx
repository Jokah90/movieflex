import { useState } from "react"
import { useRecoilState } from 'recoil'
import { MovieProps } from "../models/MovieProps"
import style from '../styles/card.module.css'
import favoriteMovies from '../atoms/favorites'
import { subReleaseDate, subOverView } from '../helperFunctions'

interface Movie {
    movie: MovieProps
}

const Card = ({movie}: Movie) => {
    const [height, setHeight] = useState<string>('')
    const [overView, setOverView] = useState<string>('0')

    const [favorites, setFavorites] = useRecoilState(favoriteMovies)

    const POSTERURL = `https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : movie.backdrop_path}`

    const setFavoriteMovie = () => {
        if (movie) {
            setFavorites([...favorites, movie])
        }

        console.log(favorites);
        
    }

    const showOverlay = () => {
        setHeight('100%')
        setOverView('1')
    }

    const hideOverlay = () => {
        setHeight('5em')
        setOverView('0')
    }

    return (
        <section className={style.card} style={{ 
            backgroundImage: `url("${POSTERURL}")`,
            backgroundSize: `cover` 
        }}
        onMouseOver={showOverlay}
        onMouseLeave={hideOverlay}
        >
            <section className={style.overlay} style={{ height: height }}>
                <h1 className={style.title} >
                    {`
                        ${movie.title 
                            ? movie.title 
                            : movie.name
                        } | 
                        ${
                             subReleaseDate(movie.release_date, movie.first_air_date)
                        }
                    `}
                </h1>
                <p className={style.overview} style={{ opacity: overView }}>{subOverView(movie.overview)}</p>
                <section className={style.rating}>
                    <button onClick={setFavoriteMovie}>+</button>
                    <i className="fas fa-star"></i>
                    <p>{movie.vote_average}</p>
                </section>
            </section>
        </section>
    )
}

export default Card