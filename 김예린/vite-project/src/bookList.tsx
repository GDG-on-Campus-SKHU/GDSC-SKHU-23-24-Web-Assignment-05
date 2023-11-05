import React from 'react'
import type * as types from './types'
import BookItem from './bookItem'

type Props = {
  bookList: types.Book[],
  deleteBook: (id: number) => void;
}

function BookList({ bookList, deleteBook }: Props) {
  return (
    <table>
      <thead>
        <tr><td>제목</td><td>저자</td><td>장르</td><td></td></tr>
      </thead>
      <tbody>
      {bookList.map((book) => (
        <BookItem key={book.id} book={book} deleteBook={deleteBook}/>
      ))}      
      </tbody>
    </table>
  )
}

export default BookList