import React from "react";

import HomeLayout from '../component/homeLayout';
import'./about.css'

const About=()=>{
    return(
        
     <div className="home_container">   
    <HomeLayout>
 
       <div className="about"> 
            <h1> WHY US </h1>
        
            
           <p>  Rwanda Booking Tours is an online platform based specialized in providing “outing reservation” services. 
                Those include forest,  parkand , river , and  memorial sites reservation/booking.
                
                 </p>
     
         
        

            </div>
            <div className="abouttwo">
            <p>  Choosing the company to facilitate your business or holiday travel is not a choice to be taken lightly. You need the confidence that your business or holiday travel  provider will exceed your expectations. At Sion Tour and Travel, we package unrivaled quality tour and travel solutions to make your travel experience great and memorable.</p>
            </div>
             
     </HomeLayout>
     </div>
    );
}
export default About;