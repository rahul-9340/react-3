import React, { useState } from "react";
import Heart from "../Icons/heart.png";
import fluent from "../Icons/fluent.png";
import KB from "../Icons/KB.png"
import bell from "../Icons/bell.png";
import imgg from "../Icons/imgg.png";
import standard from "../Icons/standars.png";
import axios from "axios";

const Navbar = ({setQuerry,setBooks}) => {

const[value,setValue] = useState("")

function searchfn(){
if(value){
axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=30`)
.then((response)=>{
    setQuerry(response.data.items)
    console.log(response.data)
    setValue("")
    setBooks("")

})
.catch((err)=>{console.log(err)})
console.log("hii",value)
}

}


return (
    <div className="nav-bar">
      <div className="img-div-1">
        <img src={standard} />
        <img src={KB} />
      </div>


      <div className="Search-bar">
   <input  type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
   
   onChange={(e)=>{setValue(e.target.value)}}
   value={value}
   />
   <button onClick={searchfn}>Search</button>
      </div>




      <div className="img-div-3">
<img src={Heart}/>
<img src={bell}/>
<img src={fluent}/>
<img src={imgg}/>
        
      </div>


    </div>
  );
};

export default Navbar;
