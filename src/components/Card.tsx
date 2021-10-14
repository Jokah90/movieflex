import { MovieProps } from "../models/MovieProps"

interface Movies {
    movie: MovieProps
}

const Card = ({movie}: Movies) => {

    return (
        <section>
            <img src={movie.poster_path} alt={`Poster for ${movie.title || movie.name}`} />
            <h1>
                {`
                    ${movie.title 
                        ? movie.title 
                        : movie.name
                    } 
                    ${movie.release_date 
                        ? movie.release_date
                        : movie.first_air_date
                    }
                `}
            </h1>
            <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
        </section>
    )
}

export default Card