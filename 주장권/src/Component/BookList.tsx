import { BookType } from "../type/type";
import BookItem from "./BookItem";


type BookListType = {
    list: Array<BookType>,
    setList: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export default function BookList({ list, setList }: BookListType) {

    const onDeleteBook = (id: number) => {
        setList((prevList) => {
            const updatedList = prevList.filter((item) => item.id !== id)
            return updatedList;
        });
    }

    return (
        <div className="Todolist">
            <table>
                <thead>
                    <td>제목</td>
                    <td>저자</td>
                    <td>장르</td>
                </thead>
                <tbody>
                    {list && list.map(({ id, title, author, genre }: BookType, index) => (
                        <BookItem key={index} onDeleteBook={onDeleteBook} id={id} title={title} author={author} genre={genre} />
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}