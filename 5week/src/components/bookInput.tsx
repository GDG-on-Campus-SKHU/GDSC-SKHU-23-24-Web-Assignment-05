import { useState } from 'react';
import { Genre } from './bookType';

type BInput = {
    AddMyBooks: (title: string, author: string, genre: Genre) => void;
}

function BookInput({ AddMyBooks }: BInput) {
    var [title, setTitle] = useState('');
    var [author, setAuthor] = useState('');
    var [genre, setGenre] = useState<Genre>(Genre.장르1);

    let handleAddBook = () => {
        if (!title.trim() || !author.trim()) { 
            alert('제목과 저자는 필수 입력 항목입니다');
            return;
        }

        AddMyBooks(title, author, genre);
        setTitle('');
        setAuthor('');
        setGenre(Genre.장르1);
    };

    return (
        <div className="Input">
            <p>
                제목 : <input
                    type='text'
                    placeholder='제목을 입력하세요'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
            </p>
            <p>
                저자 : <input
                    type='text'
                    placeholder='저자를 입력하세요'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                ></input>
            </p>
            <p>
                장르 :
                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value as Genre)}
                >
                    <option value={Genre.장르1}>인문</option>
                    <option value={Genre.장르2}>자기계발</option>
                    <option value={Genre.장르3}>판타지</option>
                </select>
            </p>
            <input
                type="button"
                value="책 추가하기"
                onClick={handleAddBook}
                style={{
                    backgroundColor: '#C89D79'
                }}
            />
        </div>
    );
}

export default BookInput;
