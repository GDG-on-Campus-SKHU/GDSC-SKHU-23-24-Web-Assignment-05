import { Genre } from "../type/type";

type BookItemtype = {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    onDeleteBook: (id: number) => void;
}
export default function BookItem({ id, title, author, genre, onDeleteBook }: BookItemtype) {

    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{genre}</td>
            <td><button className="deleteBtn" onClick={() => onDeleteBook(id)}>X</button></td>
        </tr>
    );
}