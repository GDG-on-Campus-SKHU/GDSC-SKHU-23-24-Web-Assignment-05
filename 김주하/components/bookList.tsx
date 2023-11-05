import {Book} from './bookRoot';


type BookListProps = {
  books: Book[];
  removeBook: (id: number) => void;
};

function BookList({ books, removeBook }: BookListProps) {
  return (
    <div className='BookList'>
      <h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>제목</th>
              <th>저자</th>
              <th>장르</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {books.map((book) => (
            <tr key={book.Id}>
              <td></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>
                <button onClick={() => removeBook(book.Id)} className='x'>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </h3>
    </div>
  );
}


export default BookList;