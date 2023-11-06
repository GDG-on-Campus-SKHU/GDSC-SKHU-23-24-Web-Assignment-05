import { Book } from "./BookRoot";

type BookListProps = {
  books: Book[];
  removeBook:(id: number) => void;
};



function BookList({books, removeBook}: BookListProps) {
  return (
    <div className="BookList">
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
            {books.map((BookItem) => (
              <tr key={BookItem.id}>
                <td></td>
                <td>{BookItem.title}</td>
                <td>{BookItem.author}</td>
                <td>{BookItem.genre}</td>
                <td>
                  <button
                    className="Remove"
                    onClick={() =>removeBook(BookItem.id)}
                  >
                    X
                  </button>
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
