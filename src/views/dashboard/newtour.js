import React from "react";
// import Dashlayout from "../../component/dashlayout";
import {Form,Input,Button, DatePicker,Upload,Space,InputNumber}from 'antd';
// import { UploadOutlined } from "@antd-design/icons";


const Newtourview=()=>{
    const Onfinish=(value)=>{
        console.log(value); }
    return(
       
            <Form Onfinish={Onfinish}>
            
                <Form.Item
                name="title"
                label="Title"
                rules={[{required:true}]}>
                <Input/>
                </Form.Item>
               
                <Form.Item
                name="description"
                label="Description"
                rules={[{required:false}]}>
                <Input/>
                </Form.Item>
                <Button htmlType="submit"type="primary">
                    Register
                    </Button>
                   <Space> 
                <Form.Item
                name="dueDate"
                label="DATE"
                rules={[{required:true}]}>
                <DatePicker/>
                </Form.Item>
                <Form.Item
                name="phone"
                label="PHONE"
                rules={[{required:true}]}>
                <Input/>
                </Form.Item>
            
                <Form.Item
                name="Price"
                label="Price"
                rules={[{required:true}]}>
                <Input/>
                
                </Form.Item>
                </Space>



            </Form>

    
    
    )
} 
 export default Newtourview; 