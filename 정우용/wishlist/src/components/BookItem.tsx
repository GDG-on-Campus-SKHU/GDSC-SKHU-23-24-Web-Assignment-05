import React from 'react';
import { Book } from '../types/bookTypes';

interface BookItemProps {
    book: Book;
    removeBook: (id: number) => void;
  }
  
  const BookItem: React.FC<BookItemProps> = ({ book, removeBook }) => {
    return (
      <div className="BookItem">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <button onClick={() => removeBook(book.id)}>X</button>
      </div>
    );
  };

export default BookItem;
