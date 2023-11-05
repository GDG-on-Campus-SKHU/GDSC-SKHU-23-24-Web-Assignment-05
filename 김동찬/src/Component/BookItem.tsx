import { Book } from './BookRoot';

function BookItem({ book, onDeleteBook }: { book: Book, onDeleteBook: (id: number) => void }) {
  
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>
        <button onClick={() => onDeleteBook(book.id)}>X</button>
      </td>
    </tr>
  );
}

export default BookItem;