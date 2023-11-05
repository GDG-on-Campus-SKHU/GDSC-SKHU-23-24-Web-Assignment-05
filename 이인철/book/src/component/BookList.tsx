import React,{useState} from "react";
import BookItem from "./BookItem";
const BookList=(props:{ booklist:string[], onRemoveItem:(index: number)=>void})=>{
    console.log("avxd", props.booklist);
    return(
        <>
        <div className="BookList">
            <BookItem booklist={props.booklist} ondelte={props.onRemoveItem}/>

        </div>
        </>

    )
   
}

export default BookList;