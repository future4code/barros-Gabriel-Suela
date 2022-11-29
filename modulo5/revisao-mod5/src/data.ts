import { Movie, Character, GENDER } from './types';

export const movies: Movie[] = [
    {
        id: 1,
        title: "X-men: O filme",
        year: 2000
    },
    {
        id: 2,
        title:"Deadpool",
        year:2016
    }
]

export const characters:Character[] = [
    {
        id: 1,
        name: "Storm",
        gender: GENDER.FEMALE
    },
    {
        id: 2,
        name: "Deadpool",
        gender: GENDER.OTHER,
        description: "Sexy motherfucker"
    },
    {
        id: 3,
        name: "Colossus",
        gender: GENDER.MALE
    },
    
]