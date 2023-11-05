import React, { useState } from 'react';
import './App.css';
import BookRoot from './components/BookRoot';
import { Book } from './types/bookTypes';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (newBook: Book) => {
    setBooks((currentBooks) => [...currentBooks, newBook]);
  };

  const removeBook = (id: number) => {
    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== id));
  };

  return (
    <div className="App">
      <div className="Title"><h3>MY BOOK WISHLIST</h3></div>
      <BookRoot books={books} addBook={addBook} removeBook={removeBook} />
    </div>
  );
};

export default App;
