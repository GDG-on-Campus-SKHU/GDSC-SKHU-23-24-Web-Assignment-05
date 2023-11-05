export enum Genre {
    HUMANITIES = '인문',
    FANTASY = '판타지',
    SELF_IMPROVEMENT = '자기 계발',
    ENGINEERING = '공학',
  }
  
  export interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
  }
  