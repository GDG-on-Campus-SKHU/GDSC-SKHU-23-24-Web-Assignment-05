export interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
}

export enum Genre {
  HUMANITIES = "인문",
  SELF_DEVELOPMENT = "자기계발",
  FANTASY = "판타지"
}
