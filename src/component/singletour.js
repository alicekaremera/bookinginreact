import React from "react";

const Singletour=({data})=>{
    return(
        <div className="single_container">  
        <h1> {data.title}</h1>
        <div className="image">
            <img src={data.images[0] }width="80%"/>
     

     </div>
     <p>{data.description}</p>
     <p>{data.phone}</p>
     </div>
    
     
    );
}
export default Singletour;