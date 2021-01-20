import React from 'react';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from '../containers/Home';
import About from '../containers/About';

class AppRouter extends React.Component{
    render(){
        return(
           <Router>
               <switch>
               <Route exact path="/Home.js"  component={Home}  />
               <Route path="./About"  component={About}  />
</switch>
           </Router>
        )
    }
    
    
    
    }
    
    export default AppRouter;


