import style from '../styles/searchField.module.css'
import searchBtn from '../assets/img/search.svg'

// import fetchMovies from './helperFunctions'
interface Search {
    fetchMovies: (searchString: string) => void
}


const SearchField = ({fetchMovies}: Search) => {
    
    return (
        <section className={style.searchFieldWrapper}>
            <input type="text" onChange={(e) => fetchMovies(e.target.value)} />
            <button className={style.searchButton}>
                <img 
                className={style.searchIcon} 
                src={searchBtn} 
                alt="search button" 
                />
            </button>
        </section>
    )
}

export default SearchField