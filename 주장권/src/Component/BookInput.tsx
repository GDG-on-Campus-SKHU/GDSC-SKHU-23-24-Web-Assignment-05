import { FormEvent, useState } from "react";
import { BookType, Genre } from "../type/type";

type BookInputType = {
    setList: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export default function BookInput({ setList }: BookInputType) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: Genre.HUMAN,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const onClickAddTodoBtn = (event: FormEvent) => {
        event.preventDefault();

        const newBook: BookType = {
            id: Date.now(),
            ...formData,
        };

        setList((prevList) => [...prevList, newBook]);
        setFormData({
            title: "",
            author: "",
            genre: Genre.HUMAN,
        });
    }

    return (
        <div className="Input">
            <form onSubmit={onClickAddTodoBtn}>
                <div>
                    <label>제목:</label>
                    <input
                        name="title"
                        placeholder='제목을 입력해주세요'
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>저자:</label>
                    <input
                        name="author"
                        placeholder='저자를 입력해주세요'
                        value={formData.author}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>장르:</label>
                    <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                    >
                        <option value={Genre.HUMAN}>인문</option>
                        <option value={Genre.FANTASY}>판타지</option>
                        <option value={Genre.SELFIMPROVEMENT}>자기계발</option>
                    </select>
                </div>
                <button className="addbookBtn" type="submit">책 추가하기</button>
            </form>
        </div>
    );
}
