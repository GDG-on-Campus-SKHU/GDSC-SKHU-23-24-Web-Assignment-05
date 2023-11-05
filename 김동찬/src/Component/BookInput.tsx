import React, { useState } from 'react';
import { Book, Genre } from './BookRoot';

function BookInput({ onAddBook }: { onAddBook: (book: Book) => void }) {
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    title: '',
    author: '',
    genre: Genre.Human,
  });

  const bookInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const bookSubmit = () => {
    if (!newBook.title || !newBook.author) {
      alert('빈칸을 모두 입력하세요');
    } else {
      onAddBook(newBook);
      setNewBook({
        id: 0,
        title: '',
        author: '',
        genre: Genre.Human,
      });
    }
  };
   return (
    <div className="bookInput">
      <div>
        <label>제목: </label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          placeholder="제목을 입력하세요"
          onChange={bookInputChange}
        />
      </div>
      <div>
        <label>저자: </label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          placeholder="저자를 입력하세요"
          onChange={bookInputChange}
        />
      </div>
      <div>
        <label>장르: </label>
        <select
          name="genre"
          value={newBook.genre}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            bookInputChange(e)
          }
        >
          <option value={Genre.Human}>인문</option>
          <option value={Genre.SelfImprovement}>자기계발</option>
          <option value={Genre.Fantasy}>판타지</option>
        </select>
      </div>
      <div>
        <button onClick={bookSubmit} >
          책 추가하기
        </button>
      </div>
    </div>
  );
}

export default BookInput;
