// import Card from './Card';
import {MovieProps} from '../models/MovieProps'
import Card from './Card';

interface Movies {
    props: MovieProps[]
}

const CardGrid = ({props}: Movies) => {

    return (
        <section>
            {
                props.map(movieObject => (
                    <Card key={movieObject.id} movie={movieObject}/>
                ))
            }
        </section>
    )
}

export default CardGrid