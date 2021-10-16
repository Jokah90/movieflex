// import Card from './Card';
import {MovieProps} from '../models/MovieProps'
import Card from './Card';
import style from '../styles/cardgrid.module.css'

interface Movies {
    props: MovieProps[]
}

const CardGrid = ({props}: Movies) => {

    return (
        <section className={style.cardWrapper}>
            {
                props.map(movieObject => (
                    <Card key={movieObject.id} movie={movieObject}/>
                ))
            }
        </section>
    )
}

export default CardGrid