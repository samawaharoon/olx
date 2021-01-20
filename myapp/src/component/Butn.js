import React, { Component } from 'react';
// import Welcome from '../Welcome';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import App from './App'

const Butn =()=>{
return(
 <Router> 
<div className="Butn">
    
<React.Fragment>
    
     {/* <Butn/> */}
   <Switch>
{/* <Route exact path="/Butn"  strict render={
       () => {
         return(<h1>this is Butn page</h1>)
          }
}/>  */}







 
   </Switch> 
   
   {/* <h1>THIS IS APP PAGE</h1> */}
 
   </React.Fragment> 


</div>
</Router>


)


}
 export default Butn;