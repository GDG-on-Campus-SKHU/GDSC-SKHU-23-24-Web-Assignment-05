import { useState } from 'react'
import BookInput from './Component/BookInput';
import BookList from './Component/BookList';
import './App.css'

type BookType = {
  id: number;
  title: string,
  author: string
}

function BookRoot() {
  const [list, setList] = useState<Array<BookType>>([]);

  return (
    <div className="Container">
      <p className="Title">my book list</p>
      <BookInput setList={setList} />
      <BookList setList={setList} list={list} />
    </div >
  );

}

export default BookRoot