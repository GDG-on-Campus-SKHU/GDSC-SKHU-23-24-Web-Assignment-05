import { Book } from './bookType';

type BItem = {
    book: Book;
    RemoveMyBooks: (id: number) => void;
}

function BookItem({ book, RemoveMyBooks }: BItem) {
    return (
        <tr key={book.title}> {/* key를 book.title로 변경 */}
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>
                <button 
                    id='RemoveBtn' 
                    onClick={() => RemoveMyBooks(book.Id)}
                >
                    x
                </button>
            </td>
        </tr>
    );
}

export default BookItem;
