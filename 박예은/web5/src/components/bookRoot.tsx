import { useState } from 'react';
import BookInput from './bookInput';
import BookList from './bookList';

enum Genre {
  HUMANITIES = '인문',
  FANTASY = '판타지',
  SELF_IMPROVEMENT = '자기계발',
}

type Book = {
  Id: number;
  title: string;
  author: string;
  genre: Genre;
};

function BookRoot() {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (id: number) => {
    const updatedBooks = books.filter((book) => book.Id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="Container">
      <p className="Title">MY BOOK WISHLIST</p>
      <BookInput addBook={addBook}/>
      <BookList books={books} removeBook={removeBook}/>
    </div>
  );
}

export {BookRoot, Genre};
export type {Book};
