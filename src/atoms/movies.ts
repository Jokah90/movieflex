import { atom } from 'recoil'
import { MovieProps } from '../models/MovieProps'

const movies = atom<MovieProps[]>({
    key: 'movies',
    default: []
})

export default movies