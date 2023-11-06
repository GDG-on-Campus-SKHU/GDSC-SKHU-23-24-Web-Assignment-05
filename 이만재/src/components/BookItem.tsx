import {Book} from"./BookRoot";

type BookItemProps = {
  book: Book;
  removeBook: (id: number) => void;
};

function BookItem({book, removeBook}: BookItemProps) {
  return (
    <div className="bookItem">
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.genre}</div>
      <button onClick={() => removeBook(book.id)}>삭제</button>
    </div>
  );
};

export default BookItem;
