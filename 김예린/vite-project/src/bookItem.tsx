import React from 'react'
import type * as types from './types'

type Props = {
  book: types.Book,
  deleteBook: (id: number) => void;
}

function BookItem({ book, deleteBook  }: Props) {   

  const onClick = () => {
    if (window.confirm('삭제하시겠습니까?'))
      deleteBook(book.id)
   }
   
  return (
    <tr>      
      <td>{ book.title }</td>
      <td>{book.author}</td>
      <td>{book.genre} </td>
      <td><span onClick={onClick}>x</span></td>     
    </tr>
  )
}

export default BookItem;