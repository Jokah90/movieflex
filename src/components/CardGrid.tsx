// import Card from './Card';
import {MovieProps} from '../models/MovieProps'

interface Movies {
    props: MovieProps[]
}

const CardGrid = ({props}: Movies) => {

    return (
        <section>
            {
                props.map(movie => {
                    console.log(movie);
                    // Lägg till card med object values
                })
            }
        </section>
    )
}

export default CardGrid