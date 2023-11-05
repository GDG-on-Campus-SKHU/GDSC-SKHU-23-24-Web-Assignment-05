import BookItem from './bookItem';
import { Book } from './bookType';

type BList = {
    book_list: Book[];
    RemoveMyBooks: (id: number) => void;
}

function BookList({ book_list, RemoveMyBooks }: BList) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작가</th>
                        <th>장르</th>
                    </tr>
                </thead>
                <tbody>
                    {book_list.map((book) => (
                        <BookItem key={book.Id} book={book} RemoveMyBooks={RemoveMyBooks} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
