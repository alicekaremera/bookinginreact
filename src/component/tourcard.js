// import { Card } from "antd";
import React, { useState } from "react";
import HomeLayout from '../component/homeLayout'
import './card.css'
// import logo from  '../asset/logo.png';
import { Drawer } from "antd"

import "antd/dist/antd.css"
import Singletour from './singletour'



const Tourcard = ({ data }) => {
  const [drawerVisible, setDrawervisible] = useState(false);
  const handleClickDrawerVisible = () => {
    setDrawervisible(true);
  }
  const CloseDrawervisible = () => {
    setDrawervisible(false)
  }
  return (
    <>

      <Drawer title="Bsic Drower" placement="left" visible={drawerVisible} width={730} onClose={CloseDrawervisible}>
        <Singletour data={data} />
      </Drawer>







      <div className="tour_card" >
        <div className="tour_image">

           <img src={data.images[0]} width="100%" height="100%" /> 
        </div>


        <div className="tour_detail">
           <div className="title">
            <h3 onClick={() => handleClickDrawerVisible()} style={{ background: "black", color:"white" }}>{data.title} </h3>
          </div>
          <div className="duedate">
            <p>{data.dueDate}</p>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
          <div className="date">
            <p> <strong> {data.dateScheduled} </strong></p>

            <a herf="#" >Read more .....</a>
          </div> 

        </div>
      </div>




    </>



  );
}
export default Tourcard;