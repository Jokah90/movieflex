// import Card from './Card';
import {MovieProps} from '../models/MovieProps'
import Card from './Card';
import style from '../styles/cardgrid.module.css'

interface Movie {
    movies: MovieProps[]
}

const CardGrid = ({movies}: Movie) => {
    
    return (
        <section className={style.cardWrapper}>
            {
                movies.filter(movieObject => 
                    (movieObject.poster_path || 
                    movieObject.name || 
                    movieObject.release_date) && 
                   ( movieObject.poster_path || 
                    movieObject.backdrop_path )
                    ).map(movieObject => (
                    <Card key={movieObject.id} movie={movieObject} />
                ))
            }
        </section>
    )
}

export default CardGrid