import React, { useEffect, useState } from "react";
import axios from "axios";


const BookList = ({query,setBooks,booklist})=>{


useEffect(()=>{
axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=30")
.then((response)=>{
    setBooks(response.data.items)
    console.log(response.data)
})
.catch((err)=>{console.log(err)})

},[])

    
console.log(query)

return(

<div className="Booklist">

{

booklist.length>0 && booklist.map((book)=>(
    <img key={book.id} className="book-img"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
    />
))

}

{

query.length>0 &&
 query.map((book)=>(
  <div>  {book.volumeInfo && book.volumeInfo.imageLinks &&(
    <img className="book-img"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
    />
    )
    }
    </div>
))

}

</div>
)
}

export default BookList











