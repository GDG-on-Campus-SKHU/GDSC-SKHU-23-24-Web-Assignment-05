export type BookType = {
    id: number;
    title: string;
    author: string;
    genre: Genre;
}

export enum Genre {
    HUMAN = '인문',
    SELFIMPROVEMENT = '자기계발',
    FANTASY = '판타지',
}