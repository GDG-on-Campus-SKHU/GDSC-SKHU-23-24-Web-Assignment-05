import React, { useState } from "react";
import BookInput from "./BookInput";
import BookList from "./BookList";


export enum Genre {
  HUMANITIES = "인문",
  SELFIMPROVEMENT = "자기계발",
  FANTASY = "판타지",
}

export type Book = {
  id: number;
  title: string;
  author: string;
  genre: Genre;
};



const BookRoot: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [genre, setGenres] = useState<Genre>(Genre.HUMANITIES);
  const [books, setBooks] = useState<Book[]>([]);

const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const onChangeGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = e.target.value as Genre;
    setGenres(selectedGenre);
  };

  const onAddBook = () => {
    if (title && author && !books.some((book) => book.title === title && book.author === author && book.genre === genre)) {
      setBooks([...books, { id: books.length, title, author, genre }]);
      setTitle("");
      setAuthor("");
      setGenres(Genre.HUMANITIES);
    } else {
      alert("빈 칸이 있거나 동일한 책이 이미 위시리스트에 있습니다.");
    }
  };

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div id="root">
      <div className="Container">
        <p className="Title">
          <strong>MY BOOK WISHLIST</strong>
        </p>
        <BookInput
          title={title}
          author={author}
          genre={genre}
          onChangeTitle={onChangeTitle}
          onChangeAuthor={onChangeAuthor}
          onChangeGenre={onChangeGenre}
          onAddBook={onAddBook}
        />
        <BookList books={books} removeBook={removeBook} />
      </div>
    </div>
  );
};

export default BookRoot;
