import React, { ChangeEvent, useState } from 'react'
import { Book, Genre } from './types'
type Props = {
  addBook : (book: Book) => void;
}

function BookInput({ addBook }: Props) {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [ sGenre, setGenre] = useState<Genre>(Genre.inmun);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onClick = () => { 
    if (title.trim() === '' || author.trim() === '') {
      // 제목 또는 저자 필드 중 하나라도 빈칸일 경우
      alert('빈칸을 입력하세요.');
    } else {
      const newBook: Book = {
        id: Date.now(),
        title,
        author,
        genre: sGenre,
      };
      addBook(newBook);
      setTitle('');
      setAuthor('');
      setGenre(Genre.inmun);
    }
   }
  return (
    <div className='input'>
     <div className='in'> 
      제목: <input type='text' value={title} onChange={onChange} placeholder='제목을 입력하세요' />
      </div>
      <div className='in'>
      저자: <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='저자를 입력하세요' />
      </div>
      <div className='in'>
      장르: <select value={sGenre} onChange={(e) => setGenre(e.target.value as Genre) } >
      {Object.values(Genre).map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
        </select>
      <button onClick={onClick}>책 추가하기</button>
      </div>
    </div>
  )
}

export default BookInput