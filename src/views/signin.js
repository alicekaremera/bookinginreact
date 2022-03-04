import React from "react";

import HomeLayout from '../component/homeLayout';
import "./signin.css";

const Signin=()=>{
    return(
        
    <div className="home_container">   
     <HomeLayout>
        <div className="loginbox">
            <h1>Login here</h1>
 <p> USER NAME</p>
<input type="text" placeholder="user name"></input>

<p> PASSWORD </p>

<input type="password" placeholder="password"></input>
<br></br>
<input type="submit"value="login"></input>
<br></br>
<a herf="#">Lost your password? </a>
<br></br>
<a herf="#">Don't have an account ? </a> 

            </div>
     </HomeLayout>
    </div>
    );
}
export default Signin;