import { useState } from 'react';
import BookInput from './bookInput';
import BookList from './bookList';

function BookRoot() {
  const [books, setBooks] = useState([]); 

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <BookInput addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default BookRoot;
