import { useState } from 'react';
import { Genre } from './bookType'
;
// 사용자로부터 아래 유형으로 도서 정보를 입력 받음
type BInput = {
    AddMyBooks: (title: string, author: string, genre: Genre) => void;
}
// useState 사용해 상태값 초기화
function BookInput({ AddMyBooks }: BInput) {
    var [title, setTitle] = useState('');
    var [author, setAuthor] = useState('');
    var [genre, setGenre] = useState<Genre>(Genre.장르1);

    //빈칸이 있을 경우 경고창 띄움
    let handleAddBook = () => {
        if (!title || !author || !genre) {
            alert('빈칸을 채워주세요');
            return;
        }

        // 정보 저장 이후 값 초기화
        AddMyBooks(title, author, genre);
        setTitle('');
        setAuthor('');
        setGenre(Genre.장르1); //초기값을 장르1(인문)으로 설정.
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
                    backgroundColor: ' #C89D79'
                }}
            />
        </div>
    );
}

export default BookInput;
