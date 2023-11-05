import { useState } from 'react';

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
type BookInputProps = {
  addBook: (newBook: Book) => void;
};

function BookInput({ addBook }: BookInputProps) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputGenre, setInputGenre] = useState('');

  const handleAddBook = () => {
    if (inputTitle && inputAuthor && inputGenre) {
      const newBook: Book = {
        Id: Math.floor(Math.random() * 1000), 
        title: inputTitle,
        author: inputAuthor,
        genre: inputGenre,
      };
      addBook(newBook);
      setInputTitle('');
      setInputAuthor('');
      setInputGenre(Genre.humanitites);
    } else {
      alert('빈칸을 채워주세요');
    }
  };

  return (
    <div className="bookInput">
      <div className='inputTitle'>제목:  <input type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} placeholder="제목을 입력하세요"/></div>
      <div className='inputTitle'>저자:  <input type="text" value={inputAuthor} onChange={(e) => setInputAuthor(e.target.value)} placeholder="저자를 입력하세요"/></div>
      <div className='inputTitle'>장르:  <select value={inputGenre} name='장르' onChange={(event) => setInputGenre(event.target.value)}>
  <option value="인문">인문</option>
  <option value="판타지">판타지</option>
  <option value="자기 계발">자기 계발</option>
</select></div>

      <button className='inputBtn' onClick={handleAddBook}>책 추가하기</button>
    </div>
  );
}

export default BookInput;

