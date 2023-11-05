import { useState } from 'react';
import BookInput from './BookInput';
import BookList from './BookList';

export type Book = {
  id: number;
  title: string;
  author: string;
  genre: Genre;
};

export enum Genre {
  Human = '인문',
  SelfImprovement = '자기계발',
  Fantasy = '판타지',
}

function BookRoot() {
  const [books, setBooks] = useState<Book[]>([]);
  const [nextId, setNextId] = useState(1);

  const addBook = (newBook: Book) => {
    setBooks([...books, { ...newBook, id: nextId }]);
    setNextId(nextId + 1);
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className='BookRoot'>
      <BookInput onAddBook={addBook} />
      <BookList books={books} onDeleteBook={deleteBook} />
    </div>
  );
}

export default BookRoot;
