import { Book } from './bookType';

// 도서정보 객체와 삭제함수를 prop로 받아서 사용
type BItem = {
    book: Book;
    RemoveMyBooks: (id: number) => void;
}
function BookItem({ book, RemoveMyBooks }: BItem) {
    return (
        <tr key={book.Id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>
                <button id='RemoveBtn' onClick={() => RemoveMyBooks(book.Id)}>x</button>
            </td>
        </tr>
    );
}

export default BookItem;
