
import React, { useState } from 'react';
import  './header.css';
import logo from  '../asset/logo.png';


import { Modal, Form, Input, Button} from "antd";
import {useNavigate} from "react-router-dom";

const Header=()=>{
  
  
  const [visible,setVisible]=useState(false);
  
  const  OnFinish=(values)=>{
    console.log(values)
  }
  const navigate= useNavigate();
    return(
      <>
      <Modal  
      visible={visible} 
       width="40%"
       onOk={()=>setVisible(false)}
       onCancel={()=>setVisible(false)}> 

      <h1> signin </h1>
      <Form OnFinish={OnFinish}>
        <Form.Item label="email" name="email" rules={[{requied:true ,type:"email"}]}>
          <Input type="email"/>
          </Form.Item>
          <Form.Item label="password" name="password" rules={[{requied:true }]}>
          <Input type="password" />
          </Form.Item>
          <Button htmlType="submit"onClick={()=>{localStorage.setItem("userLogedIn",true) ;
          navigate("/dash/newtour")
          
           } }> 

            Login
            </Button>
          </Form>
          </Modal>

 
       
        <div className="header">
             <div className="logo"> 
             <img src={logo} />  
       
          </div> 
  
        <div class="menu">
         <a class="active" href="home"> Home</a>
            <a href="About">About us</a>
         <a href="Garelly">Garelly</a>
         <a href="#"  onClick={()=>setVisible(true)}>Sign in</a>
          <a href=" Sign_up">Sign up</a>  
          {/* <a href="singletour">singletour</a>  */}
          <a href="tours">tours</a> 
        
        </div>
        </div> 
        
       
 


  
         

            
        </>
          
          
          
    );
}
export default Header;
