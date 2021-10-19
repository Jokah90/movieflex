import { atom } from 'recoil'
import { MovieProps } from '../models/MovieProps'

const favorites = atom<MovieProps[]>({
    key: 'favorites',
    default: []
})

export default favorites