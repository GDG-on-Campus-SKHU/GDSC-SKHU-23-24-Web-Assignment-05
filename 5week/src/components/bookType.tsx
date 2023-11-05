export type Book = {
    Id: number;
    title: string;
    author: string;
    genre: Genre;
}

export enum Genre {
    장르1 = '인문',
    장르2 = '자기계발',
    장르3 = '판타지',
}