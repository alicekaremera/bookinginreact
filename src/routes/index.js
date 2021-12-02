import React from "react";
import {Routes, Route,useLocation } from "react-router-dom";
import Home from "../views/home";
import Garelly from "../views/garelly";
import Signin from "../views/signin";
import About from "../views/about";
import Signup from "../views/signup";
import Tours from "../views/tours";
import Newtourview from "../views/dashboard/newtour";
import Dashlayout from "../component/dashlayout";
import Alltours from "../views/dashboard/alltours";

const isUserLogedIn=localStorage.getItem("userLogedIn");

const Index=()=>{
    const currentUrl=useLocation().pathname;
    return(
        <> 

    <Routes> 
        <Route exact path ='/home' element={<Home/>}></Route> 
        <Route exact path ='/garelly' element={<Garelly/>}></Route> 
        <Route exact path ='/signup' element={<Signup/>}></Route> 
        <Route exact path ='/signin' element={<Signin/>}></Route> 
        <Route exact path ='/about' element={<About/>}></Route>
        <Route exact path ='/tours' element={<Tours/>}></Route>
        {/* <Route exact path ='/newtour' element={<Newtourview/>}></Route> */}

       
        
        </Routes>
        {
            isUserLogedIn  && currentUrl.includes("/dash") ?(
                <Dashlayout>
        <Routes>

        <Route exact path ='/dash/newtour' element={<Newtourview/>}></Route>
        <Route exact path ='/dash/alltours' element={<Alltours/>}></Route>


        </Routes>
        </Dashlayout> ):(
            <></>
        )

        }
        

       
        

         

        
    </>
    )
}
export default Index;