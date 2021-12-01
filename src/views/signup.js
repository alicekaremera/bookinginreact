import React from "react";

import HomeLayout from '../component/homeLayout';
import'./signup.css'
import{MailOutlined }from '@ant-design/icons';
import{HomeOutlined }from '@ant-design/icons';
import{PhoneOutlined }from '@ant-design/icons';

const Signup=()=>{
    return(
        
    <div className="home_container">   
     <HomeLayout>
        <div className="signup">
            <h1>  call us to:</h1>
            <HomeOutlined /> &nbsp;&nbsp; Muhima road 347k
            <br></br>      <br></br><br></br>
         
            <PhoneOutlined /> &nbsp;&nbsp;
            (+250)788563270 or (+250)780273245
            <br></br>   <br></br>   <br></br>
            <MailOutlined /> &nbsp;
            booktours@gmail.com
           


            
            </div>
    </HomeLayout>
    </div>
    );
}
export default Signup;