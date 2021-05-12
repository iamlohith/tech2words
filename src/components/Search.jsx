import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const Search  = ()=> {
    const[img,setImg] =useState("");
    const inputEvent=(event)=>{
        const data = event.target.value;
        setImg(data);
    }
    return(
        <>
        <Navbar/>
<br/>
<br/>
<br/>
<div className="searchbar">
    <input type="text" placeholder="search anything .." value={img} onChange={inputEvent}/>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
   <Footer/>     
        </>
    );
    
}

export default Search;