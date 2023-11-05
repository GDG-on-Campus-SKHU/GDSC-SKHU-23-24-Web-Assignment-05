import React from "react";

const BookItem = (props: { booklist: string[],ondelte:(index:number)=>void }) => {
    const delete1=(index:number)=>{
        props.ondelte(index);
    }   
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>제목</td><td>저자</td><td>장르</td>
                    </tr>
                    </thead>
                    
                    <tbody>
                    {props.booklist && props.booklist.map((book, index) => {
                    const [title, author, genre] = book.split(', ');
                    return (
                            <tr key={index}>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>{genre}</td>
                            <input className="xx" onClick={()=> props.ondelte(index)} type="button" value="x"></input>
                    </tr>
                     );
                    })}

                </tbody>
            </table>
        </>
    )
}

export default BookItem;
