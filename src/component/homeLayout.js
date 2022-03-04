import React from "react";

import "./homelayout.css";
import Header from '../component/header';
import Footer from "../component/footer";



const HomeLayout=({children})=>{
    return(
        
    <div className="home_container">   
    <Header> </Header>
   
    <div style={{height:"80vh"}}>
    
        {children}

    </div>
    <Footer></Footer> 
    </div>
    );
}
export default HomeLayout;


 


