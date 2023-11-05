import { useState } from 'react';
import BookList from './bookList';
import BookInput from './bookInput';
import { Book, Genre } from './bookType';
import './App.css';

function BookRoot() {
    const [books, setBooks] = useState<Book[]>([]);

    const AddMyBooks = (title: string, author: string, genre: Genre) => {
        const NewBook: Book = { 
            Id: books.length + 1,
            title,
            author,
            genre,
        };
        setBooks([...books, NewBook]);
    };

    const RemoveMyBooks = (id: number) => {
        const NewBookList = books.filter(book => book.Id !== id);
        setBooks(NewBookList);
    };

    return (
        <div>
            <p className="Title">MY BOOK WISHLIST</p>

            <BookInput AddMyBooks={AddMyBooks} />
            <BookList book_list={books} RemoveMyBooks={RemoveMyBooks} />
        </div>
    );
}

export default BookRoot;
