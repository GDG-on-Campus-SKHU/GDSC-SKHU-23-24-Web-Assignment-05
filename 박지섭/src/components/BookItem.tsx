import { Book } from "./Book";

type BookItemProps = {
  book: Book;
  removeBook: (id: number) => void;
};

function BookItem({ book, removeBook }: BookItemProps) {
  return (
    <li>
      {book.title} {book.author} {book.genre}
      <button onClick={() => removeBook(book.id)} className="X">X</button>
    </li>
  )
}

export default BookItem;