import React, {useState} from 'react'
import type * as types from './types'
import BookInput from './bookInput';
import BookList from './bookList';
function BookRoot (){
  const [books, setBooks] = useState<types.Book[]>([]);

  const addBook = (book: types.Book) => {
    setBooks([...books, book]);
  };
  const deleteBook = (id: number) => {
    setBooks( BookList => BookList.filter(book => book.id !== id));
  }; 

  return (
    <div  >      
      <BookInput addBook={addBook} />
      <BookList bookList={books} deleteBook={deleteBook} />      
    </div>
  )
}

export default BookRoot;