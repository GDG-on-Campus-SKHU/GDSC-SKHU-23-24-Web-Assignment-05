import { useState } from 'react';
import {Genre} from './bookRoot'; 
import {Book} from './bookRoot';

type BookInputProps = {
  addBook: (newBook: Book) => void;
};

function BookInput({ addBook }: BookInputProps) {
  const [newBook, setNewBook] = useState<Book>({
    Id: 1,
    title: '',
    author: '',
    genre: Genre.HUMANITIES,
  });

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      addBook(newBook);
      setNewBook({
        Id: newBook.Id + 1,
        title: '',
        author: '',
        genre: Genre.HUMANITIES,
      });
    } else {
      alert('빈칸을 모두 입력하세요');
    }
  };

  return (
    <div className='Input'>
      <div className='bookTitle'> 제목: <input
        type="text"
        placeholder="제목을 입력하세요"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      </div>
      <div className='bookWriter'>
      저자: <input
        type="text"
        placeholder="저자를 입력하세요"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      </div>
      <div className='bookGenre'>
      장르: <select
        value={newBook.genre}
        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value as Genre })}
      >
        {Object.values(Genre).map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      </div>
      <button onClick={handleAddBook} className='add'>책 추가하기</button>
    </div>
  );
}

export default BookInput;
