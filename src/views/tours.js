import React from "react";


import HomeLayout from '../component/homeLayout'
import Tourcard from '../component/tourcard';
import ToursData from "../asset/constants/tours.json";
import "./tours.css"

// import {Drawer} from "antd"




const Tours = () =>{
    
    return(
      

        
  <HomeLayout>
     <div className="card_container"> 
     <h1>RWANDA BOOKING TOURS </h1>
     
    

    <div className="tour_container">
        {
        
        ToursData.map((data)=>(<Tourcard data={data}/>))

        }

        

        </div>
        
        </div>

      </HomeLayout>
    

    
     

    );
}
export default Tours ; 