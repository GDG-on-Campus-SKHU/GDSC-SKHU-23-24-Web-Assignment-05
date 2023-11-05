import { useState } from 'react';
import BookInput from './components/bookInput';
import BookList from './components/bookList';
import './App.css'

enum Genre {
  humanitites = "인문",
  fantasy = "판타지",
  selfDevelop = "자기계발",
}

type Book = {
  Id: number;
  title: string;
  author: string;
  genre: Genre;
};

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (id: number) => {
    const updatedBooks = books.filter((book) => book.Id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div id="root">
      <div className="Container">
      <p className='Title'>MY BOOK WISHLIST</p>
      <div className='Input'><BookInput addBook={addBook} /></div>
      <div className='BookList'><BookList books={books} removeBook={removeBook} /></div>
      </div>
    </div>
  );
};

export default App;
