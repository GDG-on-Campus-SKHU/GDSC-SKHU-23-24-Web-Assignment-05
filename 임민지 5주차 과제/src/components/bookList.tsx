import BookItem from './bookItem';

type Book = {
  Id: number;
  title: string;
  author: string;
  genre: string;
};

type BookListProps = {
  books: Book[];
  removeBook: (id: number) => void;
};

function BookList({ books, removeBook }: BookListProps) {
  const handleDelete = (id: number) => {
    removeBook(id);
  };

  return (
    <div className="bookList">
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>저자</th>
            <th>장르</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr className="tbodyTr" key={book.Id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>
                <button className="deleteBtn" onClick={() => handleDelete(book.Id)}><p className='deleteFont'>X</p></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;

