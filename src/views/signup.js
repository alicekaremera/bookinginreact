// import React, { useState } from "react";
// import "./signup.css";
// import HomeLayout from "../components/homeLayout";
// import "antd/dist/antd.css";
// import { Form, Input, Button, Select,DatePicker } from "antd";
// // import { Drawer } from "antd"
// // import  { useState } from "react";


// import { notification } from "antd";



// const Signup = () => {
 

//   const [isUserPharmacy, setIsUserPharmacy] = useState(false);

//   const onFinish = (values) => {
//     console.log("SuccessKKKKKK:", values);
//     pharmacyApis.createAccount(values).then((res)=>{
//       if(!res){
//               return notification.error({message:" server is down"})
      
// }
// if(!res.status===200){
//       return notification.success({message:"your account created sucessfull"})
// }
// else{
// return notification.error({message:!res.data.error?res.data.message:res.data.error}) 
// }
// })
// // navigate("#")
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
   

//   };
//   const { Option } = Select;

//   return (
//     <>
//       {/* <Drawer title="Bsic Drower" placement="left" visible={drawerVisible} width={730} onClose={CloseDrawervisible}>
//         <Singletour data={data} />
//       </Drawer> */}

//       <HomeLayout>
//         <div className="bg-fom">
//          <div className="bg-photo"> </div>
//             <div className="bg-form">
//             <div className="hd-form">
//               <div className="hd-name">
//                 {" "}
//                 <h2> Register here!! </h2>{" "}
//               </div>

//               <Form
//                 name="basic"
//                 labelCol={{ span: 8 }}
//                 wrapperCol={{ span: 16 }}
//                 initialValues={{ remember: true }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <Form.Item
//                   label="firstname"
//                   name="firstname"
//                   rules={[
//                     { required: true, message: "Please input your username!" },
//                   ]}
//                   style={{
//                     width: "370px",
//                     height: "40px",
//                     marginLeft: "70px",
//                     color: "white",
//                   }}
//                 >
//                   <Input />
//                 </Form.Item>
//                 <Form.Item
//                   label="lastname"
//                   name="lastname"
//                   rules={[
//                     { required: true, message: "Please input your username!" },
//                   ]}
//                   style={{ width: "370px", height: "40px", marginLeft: "70px" }}
//                 >
//                   <Input />
//                 </Form.Item>

//                 <Form.Item
//                   label="phone"
//                   name="phone"
//                   rules={[
//                     { required: true, message: "Please input your username!" },
//                   ]}
//                   style={{ width: "370px", height: "40px", marginLeft: "70px" }}
//                 >
//                   <Input />
//                 </Form.Item>
//                 <Form.Item
//                   label="email"
//                   name="email"
//                   rules={[
//                     { required: true, message: "Please input your username!" },
//                   ]}
//                   style={{ width: "370px", height: "40px", marginLeft: "70px" }}
//                 >
//                   <Input />
//                 </Form.Item>

//                 <Form.Item
//                   label="Password"
//                   name="password"
//                   rules={[
//                     { required: true, message: "Please input your password!" },
//                   ]}
//                   style={{ width: "370px", height: "40px", marginLeft: "70px" }}
//                 >
//                   <Input  />
//                 </Form.Item>

//                 <Form.Item 
//                 label="age">
//         <DatePicker />
//       </Form.Item>

//                 {isUserPharmacy ? (
//                   <>
                  
//                     <Form.Item
//                       label="pharmacy-name"
//                       name="pharmacy-name"
//                       rules={[
//                         { required: true, message: "tin nymber is required" },
//                       ]}
//                     >
//                       <Input
//                         style={{ width: 160 }}
//                         placeholder="Please input"
//                       />
//                     </Form.Item>
                    
//                     <Form.Item
//                       label="Tin-number"
//                       name="Tin-number"
//                       rules={[
//                         { required: true, message: "tin nymber is required" },
//                       ]}
//                     >
//                       <Input
//                         style={{ width: 160 }}
//                         placeholder="Please input"
//                       />
//                     </Form.Item>


//                     <Form.Item label=" Pharmacy-Address">
//                 <Input.Group compact>
//                   <Form.Item
//                     name={['address', 'province']}
//                     noStyle
//                     rules={[{ required: true, message: 'Province is required' }]}
//                   >
//                     <Select placeholder="Select province" style={{ width: '170px' }}>
//                       <Option value="North-province">North-province</Option>
//                       <Option value="South-province">South-province</Option>
//                       <Option value="East-province">East-province</Option>
//                       <Option value="WEST-PROVINCE">WEST-PROVINCE</Option>
//                       <Option value="KIGALI-CITY">KIGALI-CITY</Option>

//                     </Select>
//                   </Form.Item>
//                   <Form.Item
//                     name={['address', 'District']}
//                     noStyle
//                     rules={[{ required: true, message: 'District is required' }]}
//                   >
//                     <Input style={{ width: '170px' }} placeholder="Input district" />
//                   </Form.Item>
//                   <Form.Item
//                     name={['address', 'sector']}
//                     noStyle
//                     rules={[{ required: true, message: 'sectotr is required' }]}
//                   >
//                     <Input style={{ width: '170px' }} placeholder="Input sector" />
//                   </Form.Item>
//                   <Form.Item
//                     name={['address', 'cell']}
//                     noStyle
//                     rules={[{ required: true, message: 'cell is required' }]}
//                   >
//                     <Input style={{ width: '170px' }} placeholder="Input cell" />
//                   </Form.Item>
//                   <Form.Item
//                     name={['address', 'street']}
//                     noStyle
//                     rules={[{ required: true, message: 'street is required' }]}
//                   >
//                     <Input style={{ width: '170px' }} placeholder="Input street" />
//                   </Form.Item>

//                 </Input.Group>


//               </Form.Item>
                    
                    


                  





                    
//                   </>
//                 ) : (
//                   <></>
//                 )}

//                 <Form.Item
//                   name="gender"
//                   label="Gender"
//                   rules={[
//                     {
//                       required: true,
//                     },
//                   ]}
//                 >
//                   <Select
//                     style={{
//                       width: "170px",
//                       height: "40px",
//                       marginLeft: "60px",
//                     }}
//                   >
//                     <Option value="male">male</Option>
//                     <Option value="female">female</Option>
//                     <Option value="other">other</Option>
//                   </Select>
//                 </Form.Item>

//                 <Form.Item
//                   name="role"
//                   label="role"
//                   rules={[
//                     {
//                       required: true,
//                     },
//                   ]}
//                 >
//                   <Select
//                     style={{
//                       width: "170px",
//                       height: "40px",
//                       marginLeft: "60px",
//                     }}
//                     placeholder="Select a option and change input text above"
//                     onChange={(value) => {
//                       if (value == "pharmacyadmin") {
//                         setIsUserPharmacy(true);
//                       }
//                       else{
//                         setIsUserPharmacy(false)
//                       }
//                     }}
//                     // allowClear
//                   >
//                     <Option value="admin">admin</Option>
//                     <Option value="user">user</Option>
//                     <Option value="pharmacyadmin">pharmacyadmin</Option>
//                   </Select>
//                 </Form.Item>

//                 <Form.Item
//                   wrapperCol={{
//                     offset: 8,
//                     span: 16,
//                   }}
//                 >
//                   <Button
//                     type="primary"
//                     htmlType="submit"
//                     style={{
//                       width: "70px",
//                       height: "40px",
//                       marginLeft: "70px",
//                       marginTop: "5px",
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </Form.Item>
                
//               </Form>
//             </div>
//            </div> 
//         </div>
//       </HomeLayout>
//     </>
//   );
// };
// export default Signup;
 