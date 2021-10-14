// import fetchMovies from './helperFunctions'
interface Search {
    fetchMovies: (searchString: string) => void
}


const SearchField = ({fetchMovies}: Search) => {
    
    return (
        <section>
            <input type="text" onChange={(e) => fetchMovies(e.target.value)} />
        </section>
    )
}

export default SearchField