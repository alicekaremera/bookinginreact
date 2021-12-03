
import React from 'react';
import  './footer.css';
import{WhatsAppOutlined}from '@ant-design/icons'
import{FacebookOutlined }from '@ant-design/icons'
import{TwitterOutlined }from '@ant-design/icons'



const Footer=()=>{
    return( 
       
        <div className="footer">
            <div className="footer1">
            <div className =" right_footer">

              <p> our quick view </p>
             <ul>
             <li> <a href="Home">Home</a> </li>
        <li> <a href="About">About us</a> </li>  
            
            <li> <a href="tours">tours</a> 
        </li>
            <li> <a href="Garelly">Garelly</a> </li>
            </ul> 
                </div>  
                <div className="combination">
                <div className="create">
                <h1> created by @ karemera alice</h1> 
                         
                 </div>
                 <div className="copy_right"> 
                          <h1> copyright &copy; 2021 rwanda booking tours</h1> 
                          </div> 
                         
                         </div>

                         
                 <div className="icon">
                     <p> social media </p>
                  <WhatsAppOutlined/>
                 <a href="https://www.facebook.com/" > whatsap</a><br></br>
                 <FacebookOutlined />
                  <a href="https://www.facebook.com/" > facebook </a> <br></br>
                
                 <TwitterOutlined />
                 <a href="https://www.facebook.com/" > Twitter </a>
                 

            


                     </div>
                     

</div>
           
          </div>
          
          
    )
}
export default Footer;
