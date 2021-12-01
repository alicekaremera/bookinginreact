import { logDOM } from '@testing-library/react';
import React from 'react';
import  './footer.css';
import{WhatsAppOutlined}from '@ant-design/icons'


const Footer=()=>{
    return( 
       
        <div className="footer">
            <div className="footer1">
            <div className =" right_footer">

              <p> our service </p>
             <ul>
            
            <li>tour</li>
            <li>EATING</li>
            <li>CIRCULATION</li>
            <li>CONTACTS</li>
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
                  <WhatsAppOutlined/ >
                 <a href="https://www.facebook.com/" > whatsap</a> 

                     </div>
                     

</div>
           
          </div>
          
          
    )
}
export default Footer;
