import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Input} from 'semantic-ui-react';
import Modal from './component/Modal';
import { Button } from 'semantic-ui-react';
import ReactModalLogin from 'react-modal-login';
import { ModalActions } from 'semantic-ui-react';
import {googleConfig} from './component/social-config';
 import {facebookConfig } from './component/facebook';
 import firebase from './component/firebase';
import sell from './component/sell';
import Search from './component/search'
import countryList from './component/countryList';
import searchpage from './component/searchpage'
// import CountryList from './component/countryList';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
// import Home from './containers/Home';
// import About from './containers/About';
// import AppRouter from './containers/Router';
import {Link} from 'react-router-dom';
import Banner from './component/Banner';
import Product from './component/product';
import Freash from './component/Freash';
import './index.css';
 import App from './component/App';
//  import Router from './component/Router';
import Butn from './component/Butn';




 const  Welcome = () => {
const nav = [
  {ID:1, Label:"MOBILE PHONE" },
  {ID:2, Label:"cars" },
  {ID:3, Label:"MOtorcyles" },
  {ID:4, Label:"House" },
  {ID:5, Label:"Tv-audio" },
  {ID:6, Label:"Tablets" },
  {ID:7, Label:"Lands and plots" },
];






 render()
 {
return(
  
  
  <React.Fragment>
   
     {/* <Router>
       <Switch>

       <Route path="/Banner" exact component={Banner}>
  
</Route>
       </Switch>
     </Router> */}

<div className ="WelcomeDiv" >


<nav className="navbar navbar-light bg-light">
        <form className="form-inline" >
<div className="_2r6hS hJUTK"><a className="" rel="" data-aut-id="btnOlxLogo" href="/"><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" ><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></a></div>
 

<div className="Location rel">
  <div className="icon search s24" >
    <input  className="Label" placeholder="your location"  value="pakistan" />
    <button  className="selectoption"> <i class="angle down icon s28"></i> </button>

 

      </div>

  </div>


<Search/>
</form> 
<Modal/>  
<button className="sell"><i class="plus icon"></i> SELL</button>   
</nav>
</div>

<div className="nav-fix flex">
  <button className="view-cates" >
  <h2 className="s5 font">All categories<button className="angle arrow" > <i class="angle down icon s28"></i></button> </h2>
  
  
</button>
{
  nav.map(item =>{
     return(
     <Link to={"/browser" + item.ID} className="noul noulh  font s15" >{item.Label}</Link>
    )
  }
  )
}


<Banner/>
<Freash/>

 <div className="home__row">
<Product ID="39769274"tittle="Modal suzuki bolan 2018" price="180,000 -2018" image="https://apollo-singapore.akamaized.net/v1/files/im9c9n7llx8r1-PK/image;s=300x600;q=60"/>
<Product  ID="93876486"tittle="7 Marla Residential Plot In Family-Friendly Community" price="12,000,000" image="https://apollo-singapore.akamaized.net/v1/files/upidhaystfaz2-PK/image;s=300x600;q=60"/ >
<Product  ID="98254739"tittle="2 bads,2 ba-775 square feet" price="65,000" image="https://apollo-singapore.akamaized.net/v1/files/4hcm2u51kujo1-PK/image;s=300x600;q=60"/>
<Product  ID="73859343"tittle="Islamabad 5 marla plot" price="350,000" image="https://apollo-singapore.akamaized.net/v1/files/y2d669lrqeh63-PK/image;s=300x600;q=60"/>
</div>


 <div className="home__row">
<Product  ID="56483437"tittle="Bathroom vanity,pvc bathroom" price="14,000" image="https://apollo-singapore.akamaized.net/v1/files/axobemo0ssz3-PK/image;s=300x600;q=60"/>
<Product  ID="87492773"tittle="" price="" image=""/>
<Product ID="34986202"tittle="5 marla plot for sale near kahna" price="1,270,000" image="https://apollo-singapore.akamaized.net/v1/files/g1zgfrri45ix1-PK/image;s=300x600;q=60" />
<Product  ID="28745692"tittle="Wheel chair commod system style" price="13,500" image="https://apollo-singapore.akamaized.net/v1/files/w5z0wxzosdsj3-PK/image;s=300x600;q=60"/>
</div>

<div className="home__row">
<Product  ID="93658334"tittle="4 spindal cnc wood router" price="1,200,000" image="https://apollo-singapore.akamaized.net/v1/files/8wq3oqlkmqnp3-PK/image;s=300x600;q=60"/>
<Product ID="938734946"tittle="diy 3d large modern wall clock" price="999" image="https://apollo-singapore.akamaized.net/v1/files/8kkzn4jtyfvm1-PK/image;s=300x600;q=60" />
<Product ID="83684638"tittle="2 bads-2ba-1300 square feet" price="4,800,000" image="https://apollo-singapore.akamaized.net/v1/files/jk0r3g7gj1ig2-PK/image;s=300x600;q=60"/>
<Product ID="87506353"tittle="2 bads-2ba-750 square feet" price="5,500,000" image="https://apollo-singapore.akamaized.net/v1/files/m5z5gwnzys153-PK/image;s=300x600;q=60"/>
</div>

<div className="home__row">
<Product ID="89465320"tittle="Elite prime bedding" price="1,300" image="https://apollo-singapore.akamaized.net/v1/files/v6nar10gnmig-PK/image;s=300x600;q=60"/>
<Product ID="38746503"tittle="ARY laguna city karachi" price="550,000" image="https://apollo-singapore.akamaized.net/v1/files/q9tugfzi961x1-PK/image;s=300x600;q=60"/>
<Product ID="98367453"tittle="4inch smart /a+++" price="26,500" image="https://apollo-singapore.akamaized.net/v1/files/fvbmt2ym1sa01-PK/image;s=300x600;q=60"/>
<Product ID="98364374" tittle="Honda civic assan mahana iqsaat per" price="650,000-7 years" image="https://apollo-singapore.akamaized.net/v1/files/wj6eq6v6j7xa-PK/image;s=300x600;q=60"/>
</div> 

<div className="home__row">
<Product ID="55894734" tittle="Glass shower cabens" price="29,500" image="https://apollo-singapore.akamaized.net/v1/files/gkcbtncccg343-PK/image;s=300x600;q=60"/>
<Product ID="54562890" tittle="Honda fit available on easy installment" price="500,000-7 years" image="https://apollo-singapore.akamaized.net/v1/files/kjziasg0c00e3-PK/image;s=300x600;q=60"/>
<Product ID="98501822" tittle="All car bodykit available" price="" image="https://apollo-singapore.akamaized.net/v1/files/bl98katde4jw-PK/image;s=300x600;q=60"/>
<Product ID="55894734"  tittle="infinix hot 10(4GB 64GB) 5000 MAHANA Iqsaat pr" price="19,500" image="https://apollo-singapore.akamaized.net/v1/files/8x7f53tlxq383-PK/image;s=300x600;q=60"/>
</div> 

<div className="home__row">
<Product ID="90829882" tittle="Plot for sale" price="2,600,000" image="https://apollo-singapore.akamaized.net/v1/files/27vz8aij6pux-PK/image;s=300x600;q=60"/>
</div>  


</div>

</React.Fragment>

)

}
 };










 

  







  
export default Welcome;


 





















 



  
  




 

 













 

