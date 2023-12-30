import React from "react";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import { useState,useEffect } from "react";
const App = ()=>{

  const[query,setQuerry] = useState([])
  const[booklist,setBooks] = useState([])

  return(
<div>
<Navbar
 setQuerry ={setQuerry}
 setBooks = {setBooks}
 />
 <BookDetails/>
<BookList query ={query}
booklist ={booklist}
setBooks = {setBooks}
/>
</div>
  )
}



export default App;




