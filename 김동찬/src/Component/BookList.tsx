import { Book } from './BookRoot';
import BookItem from './BookItem';

function BookList({ books, onDeleteBook }: { books: Book[], onDeleteBook: (id: number) => void }) {
  
  const blist = books.map((book: Book) => (
    <BookItem key={book.id} book={book} onDeleteBook={onDeleteBook} />
  ));

  return (
    <table className='bookList'>
      <thead>
        <tr>
          <td>제목</td>
          <td>저자</td>
          <td>장르</td>
          <td>&nbsp;&nbsp;</td>
        </tr>
      </thead>
      <tbody>{blist}</tbody>
    </table>
  );
}

export default BookList;