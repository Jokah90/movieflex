import { useState } from "react"
import { MovieProps } from "../models/MovieProps"
import style from '../styles/card.module.css'

interface Movies {
    movie: MovieProps
}

const Card = ({movie}: Movies) => {
    const [height, setHeight] = useState<string>('')
    const [overView, setOverView] = useState<string>('0')

    const POSTERURL = `https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : movie.backdrop_path}`

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
                        ${movie.release_date 
                            ? movie.release_date
                            : movie.first_air_date
                        }
                    `}
                </h1>
                <p className={style.overview} style={{ opacity: overView }}>{movie.overview}</p>
                <section className={style.rating}>
                    <i className="fas fa-star"></i>
                    <p>{movie.vote_average}</p>
                </section>
            </section>
        </section>
    )
}

export default Card