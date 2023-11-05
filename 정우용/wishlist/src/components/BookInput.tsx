import React, { useState } from 'react';
import { Book, Genre } from '../types/bookTypes';

interface BookInputProps {
  addBook: (book: Book) => void;
}

const BookInput: React.FC<BookInputProps> = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState<Genre | ''>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && author && genre) {
      const newBook: Book = {
        id: Date.now(), 
        title,
        author,
        genre,
      };
      addBook(newBook);
      setTitle('');
      setAuthor('');
      setGenre('');
    }
  };

  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="제목을 입력하세요." required /></label>
        </div>
        <div>
          <label>저자: <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="저자를 입력하세요." required /></label>
        </div>
        <div>
          <label>장르: 
            <select value={genre} onChange={(e) => setGenre(e.target.value as Genre)} required>
              <option value={Genre.HUMANITIES}>{Genre.HUMANITIES}</option>
              <option value={Genre.FANTASY}>{Genre.FANTASY}</option>
              <option value={Genre.SELF_IMPROVEMENT}>{Genre.SELF_IMPROVEMENT}</option>
              <option value={Genre.ENGINEERING}>{Genre.ENGINEERING}</option>
            </select>
          </label>
        </div>
        <button type="submit" className="AddBookButton">책 추가하기</button>
      </form>
    </div>
  );
};

export default BookInput;
