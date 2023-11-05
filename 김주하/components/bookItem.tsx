import {Book} from './bookRoot';
import React from 'react';

type BookItemProps = {
  book: Book;
  removeBook: (id: number) => void;
};

function BookItem({ book, removeBook }: BookItemProps) {
  return (
    <li>
        {book.title} {book.author} {book.genre}
        <button onClick={() => removeBook(book.Id)}className='x'>X</button>
    </li>
  );
}


export default BookItem;