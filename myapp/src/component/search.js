import React, { State, useState, setkeyword}  from 'react';

// 
// return(
// <div>{props.location}</div>

// )



const Search = (props) => {
const [keyword,setKeyword] = useState("");
const inputEvent = (Event)=>{
const data = Event.target.value;
 console.log(data);
 setKeyword(data);
 };


return(
//  <div className="ui action input"><input type="text" placeholder="Find,cars, mobile phone and more" key="random1" value={Search } onChange={(e) => setKeyword(e.target.value)}/><button className="ui icon button"><i aria-hidden="true" className="search icon"></i></button></div>
<div className="ui action input">
    <input type="text" placeholder="find car,mobiles and more"/><button className="ui icon button"><i aria-hidden="true" className="search icon"></i></button>

</div>



 )



 }






export default Search;