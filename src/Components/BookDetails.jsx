import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const BookDetails = ({setarray,array,query})=>{


if(query.length>0){
  setarray(query)
}



useEffect(()=>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=4`)
    .then((response)=>{
     console.log(response.data.items)
      setarray(response.data.items)
    })
    .catch((err)=>{console.log(err)})
   
},[])


return(
<div>
    {
      array.length>0&&  
     <div className="book-detail">

        <div className="book-detail1">
         <div className="image-div">
         <img  src={array[0].volumeInfo.imageLinks.thumbnail} />
         </div>
         
         <div className="title-div">
          <h2>{array[0].volumeInfo.title}</h2>
          <div className="author-div">{array[0].volumeInfo.authors}</div>
         <div>{array[0].volumeInfo.description}</div>
         </div>
        </div>
        <div className="book-detail1">
         <div className="image-div">
         <img  src={array[1].volumeInfo.imageLinks.thumbnail} />
         </div>
         
         <div className="title-div">
          <h2>{array[1].volumeInfo.title}</h2>
          <div className="author-div">{array[1].volumeInfo.authors}</div>
         <div>{array[3].volumeInfo.description}</div>
         </div>
        </div>
        <div className="book-detail1">
         <div className="image-div">
         <img  src={array[2].volumeInfo.imageLinks.thumbnail} />
         </div>
         
         <div className="title-div">
          <h2>{array[2].volumeInfo.title}</h2>
          <div className="author-div">{array[0].volumeInfo.authors}</div>
         <div>{array[2].volumeInfo.description}</div>
         </div>
        </div>
       
     </div>

    }
    
    <div className="more">MORE BOOKS</div>
    </div>
)

}

export default BookDetails;














