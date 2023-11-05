// /src/components/BookRoot.tsx

import React from 'react';
import BookInput from './BookInput';
import BookList from './BookList';
import { Book } from '../types/bookTypes';

interface BookRootProps {
    books: Book[];
    addBook: (book: Book) => void;
    removeBook: (id: number) => void;
  }

const BookRoot: React.FC<BookRootProps> = ({ books, addBook, removeBook }) => {
  return (
    <div className="Container">
      <BookInput addBook={addBook} />
      <BookList books={books} removeBook={removeBook} />
    </div>
  );
};

export default BookRoot;
