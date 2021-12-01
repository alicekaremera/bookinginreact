import React from "react";
import 'antd/dist/antd.css';
import {Space, Table} from 'antd';
import allAvaliabletours from '../../asset/constants/tours.json';
import allInformationusers from '../../asset/constants/users.json';
import{EyeOutlined,EditOutlined, DeleteOutlined} from "@ant-design/icons"
    
const Column= [ {
    title:"Title",
    dataIndex:"title",
    key:"title",
},
{

    title:"Date schedule",
    dataIndex:"dueDate",
    key:"dueDate"

},
{
    title:"price",
    dataIndex:"price",
    key:"price",
     
},
{
    title:"seats",
    dataIndex:"seats",
    key:"seats",


},
{
title:"Action",
dataIndex:"action",
render:(text,record)=>(
<Space size="middle" >
    <a><EyeOutlined/></a>
    <a><EditOutlined/></a>
    <a><DeleteOutlined/></a>
    </Space>
    )
},



];


const ColumnONE = [ {
    title:"First name",
    dataIndex:"firstname",
    key:"firstname",
},
{

    title:"Last name",
    dataIndex:"lastname",
    key:"lastname"

},
{

    title:"E-mail",
    dataIndex:"email",
    key:"email"

},
{

    title:"Phone",
    dataIndex:"phone",
    key:"phone"

},
{

    title:"Adress",
    dataIndex:"adress",
    key:"adress",

},
{

title:"Action",
dataIndex:"action",
render:(text,record)=>(
<Space size="middle" >
    <a style={{color:"green"}}>Accept</a>
    <a style={{color:"red"}}>Decline</a>
  
    </Space>

    )
},

]

const Alltours=()=>{
   
    return(
        <>
    <Table columns={Column}dataSource={allAvaliabletours}/>
    <Table columns={ColumnONE} dataSource={allInformationusers}/>
    
    
    </> 
        
    );
    
};
export default Alltours ; 