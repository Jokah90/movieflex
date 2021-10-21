import { MovieProps } from "./models/MovieProps"

export const subReleaseDate = (x: string, y: string) => {
    if (x !== undefined) {
        return x.substr(0,4)
    } else if (y !== undefined) {
        return y.substr(0,4)
    } else {
        return
    }
}

export const subOverView = (x: string) => {
    if (x !== undefined && x.length > 250) {
        return x.substr(0, 250) + '...'
    } else {
        return x
    }
}

export const setFavoriteMovie = (
    x: MovieProps, 
    setFav: { (valOrUpdater: MovieProps[] | ((currVal: MovieProps[]) => MovieProps[])): void; (arg0: MovieProps[]): void }, favorites: MovieProps[]) => {
    
    const y = favorites.filter(favmovie => x.id === favmovie.id )
    if (y.length <= 0) {
        setFav([...favorites, x])
        
    }
    
}

// export const setFavButton = (favorites: MovieProps[], x: MovieProps) => {
//     /*
//     <i class="fas fa-plus"></i> // Plus
//     <i class="fas fa-check"></i> // Checkmark
//     */
//     if (favorites.includes(x)) {
//         console.log('Hej');
//     } else {
//         console.log('Inte');
//     }
// }

export default { 
    subReleaseDate, 
    subOverView, 
    setFavoriteMovie,
    // setFavButton
}