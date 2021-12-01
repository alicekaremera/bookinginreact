import React from "react";
import "./home.css";

import HomeLayout from '../component/homeLayout';
import travel from  '../asset/travel.png';


const Home=()=>{
    return(
        
    <div className="home_container"> 
    
    <HomeLayout>
    <h1> RWANDA BOOKING TOURS</h1> 
        <div className="home_bg">
             <h1> YOUR JOY IS OUR PLEASURE </h1>
             <br></br>
             <h2> PLEASE BOOK YOURS</h2>
             <div class="main_selection"> 
            
             <div class="label">  
                 <label for="category" category id="category ">Tour category:<br></br> </label>
                
                    <select name="Category">
                        
                        
                         <option value="Forest">Forest </option>
                        <option value="lake">Lake</option>
                        <option value="River">River </option>
                        <option value="park">Park</option> 
                        <option value="volcanoes">volcanoes</option>

                  </select >
                  <br></br>
                  <br></br>
                  
                  <label for="location" location id="location">Tour location: <br></br> </label>
                  
                  <select name="location ">
                   <option value="Musanze">Musanze </option>
                  <option value="kayonza">kayonza</option>
               <option value="nyanza">Nyanza </option>
             <option value="Rwamagana">rubavu</option>

                  </select>
                  <br></br>
                  <br></br>
                  <button type="submit" >
                  <strong>  <a href=""> BOOK NON! </a></strong>
                
                      </button> 

                  </div>
                   <div class="right_photo"> 
                     <img src={travel}/>  
                      </div> 
    
            </div>
            </div>

    </HomeLayout>
    </div>
    );
}
export default Home;
  
 


