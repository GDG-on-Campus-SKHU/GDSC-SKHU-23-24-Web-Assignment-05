    import React,{useState} from "react";
    import BookList from "./BookList";

    const Bookinput=(props:any)=>{
        enum Genre{
            인문="인문",
            판타지="판타지",
            자기계발="자기계발"

        }
        type Book = { 
            title:string;
            author:string;
            genre:Genre;

        };
        const [title,setTitle]=useState('');
        const [author,setAuthor]=useState('');
        const [genre,setGenre]=useState(Genre.인문);
        const [booklist,setBooklist]=useState<string[]>([]);
        const additem=()=>{
            if(title.trim() !== '' && author.trim()!== ''){
            const BookInfo:Book={
                title: title,
                author: author,
                genre: genre
            }
            const bookAsString = `${BookInfo.title}, ${BookInfo.author}, ${BookInfo.genre}`;
            setBooklist([...booklist, bookAsString]);
            setTitle('');
            setAuthor('');
            setGenre(Genre.인문);
            console.log("asdfg",booklist);
        }
        else{
            alert("빈칸을 입력하세요");
        }
    }
        const handleInput= (event:any) =>{
            setTitle(event.target.value);
        
        }
        const handleInputA= (event:any) =>{
            setAuthor(event.target.value);
        }
        const handleInputG= (event:any) =>{
            setGenre(event.target.value);
        }
        const handleDelte=(index:number)=>{
            const updatedBooklist = [...booklist];
            updatedBooklist.splice(index, 1);
            setBooklist(updatedBooklist);
            
        }
        
        return(
            <>
            <div className="ptitle">
                            <p>My Book WishList</p>
                        </div>
                        <div className="input1">
                            제목:<input type="text" placeholder="제목을 입력하세요" value={title} onChange={handleInput} ></input>
                        </div>
                        <div className="input1">
                            저자:<input type="text" placeholder="저자를 입력하세요" value={author} onChange={handleInputA}></input>
                        </div>
                        <div className="input1">
                            장르:<select name="genre" value={genre} onChange={handleInputG}>
                                <option value={Genre.인문}>인문</option>
                                <option value={Genre.판타지}>판타지</option>
                                <option value={Genre.자기계발}>자기계발</option>
                            </select>
                        </div>
                        <input type="button" onClick={additem}  className="button1" value="책 추가하기"></input>
                        <BookList booklist={booklist} onRemoveItem={handleDelte} />
                        
            </>
        )
    }
    export default Bookinput;