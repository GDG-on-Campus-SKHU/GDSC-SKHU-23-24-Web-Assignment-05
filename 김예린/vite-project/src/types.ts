export enum Genre {
    inmun = "인문",
    fantasy = "판타지",
    jakikebal = "자기계발"
}

export type Book = {   
    id: number,
    title: string,
    author: string,
    genre: Genre
};