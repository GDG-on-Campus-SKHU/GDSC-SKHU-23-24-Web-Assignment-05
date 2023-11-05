import BookItem from './bookItem';
import { Book } from './bookType';

// 도서 목록과 삭제 함수를 prop으로 받아서 사용
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
                        <th>저자</th>
                        <th>항목</th>
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
