import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Welcome from './Welcome';
import {Input,Button, Search} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Modal from './component/Modal'
// import firebase from '../component/firebase';
import {BrowserRouter, BrowserRouter as Router,Route,Switch } from "react-router-dom";
import App from './component/App';
ReactDOM.render(
  <React.StrictMode>
    
   
  
   <BrowserRouter>
    <Welcome/>
       <App/> 
       
 
 </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
