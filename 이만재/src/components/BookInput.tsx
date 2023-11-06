import React from "react";
import {Genre} from"./BookRoot";


type BookInputProps = {
  title: string;
  author: string;
  genre: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAuthor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGenre: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onAddBook: () => void;
};

const BookInput = ({ title, author, genre, onChangeTitle, onChangeAuthor, onChangeGenre, onAddBook }: 
  BookInputProps) => {
  return (
    <div className="input">
      <div className="BookTitle">
        제목:{" "}
        <input
          type="text"
          placeholder="제목을 입력하세요."
          onChange={onChangeTitle}
          value={title}
        />
      </div>
      <div className="Author">
        저자:{" "}
        <input
          type="text"
          placeholder="저자를 입력하세요."
          onChange={onChangeAuthor}
          value={author}
        />
      </div>
      <div className="Genre">
        장르:&nbsp;
        <select onChange={onChangeGenre} value={genre}>
          {Object.values(Genre).map((genre) => (
            <option value={genre} key={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onAddBook}>책 추가하기</button>
    </div>
  );
};

export default BookInput;
