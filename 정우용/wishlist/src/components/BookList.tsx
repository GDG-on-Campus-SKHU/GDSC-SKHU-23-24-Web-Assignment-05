import React from 'react';
import BookItem from './BookItem';
import { Book } from '../types/bookTypes';

interface BookListProps {
    books: Book[];
    removeBook: (id: number) => void;
  }
  
  const BookList: React.FC<BookListProps> = ({ books, removeBook }) => {
    return (
      <div>
        <div className="BookListHeader">
          <div>제목</div>
          <div>저자</div>
          <div>장르</div>
        </div>
        {books.map((book) => (
          <div key={book.id} className="BookItem">
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.genre}</div>
            <button onClick={() => removeBook(book.id)}>X</button>
          </div>
        ))}
      </div>
    );
  };

export default BookList;
