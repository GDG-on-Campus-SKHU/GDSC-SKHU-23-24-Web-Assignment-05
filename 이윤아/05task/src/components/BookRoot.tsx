import { useState } from 'react';
import BookList from './bookList';
import BookInput from './bookInput';
import { Book, Genre } from './bookType';
import './App.css';


function BookRoot() {
    var [books, setBooks] = useState<Book[]>([]);

    //도서 목록 추가
    let AddMyBooks = (title: string, author: string, genre: Genre) => {
        let NewBook: Book = { 
            Id: books.length + 1,
            title,
            author,
            genre,
        };
        setBooks([...books, NewBook]);
    };
    //도서 목록 삭제
    let RemoveMyBooks = (id: number) => {
        let NewBookList = books.filter(book => book.Id !== id); //책을 필터링 하여 삭제(아이디 확인)
        setBooks(NewBookList);//리스트 목록을 재배열
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
