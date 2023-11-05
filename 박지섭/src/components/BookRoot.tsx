import { useState } from "react"
import { Book } from "./Book"
import BookInput from "./BookInput";
import BookList from "./BookList";

function BookRoot() {

  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const RemoveBook = (id: number) => {
    const refreshBooks = books.filter((book) => book.id! == id);
    setBooks(refreshBooks);
  };

  return (
    <div className="Container">
      <p className="Title">MY BOOK WISHLIST</p>
      <BookInput addBook={addBook} />
      <BookList books={books} removeBook={RemoveBook}/>
    </div>
  );
}

export default BookRoot;