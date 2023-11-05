import { Book } from "./Book";

type BookListProps = {
  books: Book[];
  removeBook: (id: number) => void;
};

function BookList({ books, removeBook }: BookListProps) {
  return (
    <div className="BookList">
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>저자</th>
            <th>항목</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>
                <button onClick={() => removeBook(book.id)} className="X">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;