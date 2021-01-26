import React, { Component } from 'react';
// import Welcome from '../Welcome';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Butn from './Butn';
const App =()=>{
  
return(
 <Router> 
<div className="app">
<React.Fragment>
  
     
   <Switch>

   <Route exact path="/"  strict render={
       () => {
         return(<h1>this is our  Welcome page</h1>)
          }
}/> 
<Route  path="/App"  strict exact render={
       () => {
         return(<h1>this is our App page</h1>)
          }
}/> 
   </Switch> 

   <Switch>
   
   
   <Route exact path="/Butn"  strict render={
       () => {
         return(<h1>this is our Butn page</h1>)
          }
}/> 
      </Switch> 
   </React.Fragment> 


</div>
</Router>


)


}
 export default App;
