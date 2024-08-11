import React from 'react';
import './Footer.css'; // Import CSS for styling
import { BsAirplaneFill } from "react-icons/bs";
const Footer = () => {
     let About = ["About Us",'Our Service','Cooki Policy','Prive Ploicy'];
     let Help =["FAQ",'Easy EMI','Pyment method','Contact us'];
     let Social=['Twiter','Linkedin','Facebook','Youtube'];
        
  return (
    <footer className="footer">
         <div className='footer-container d-flex' style={{justifyContent:'space-around'}}>
         <div className='d-flex'style={{flexDirection:'column'}}>
              <div className='demonav'>
              <BsAirplaneFill style={{marginTop:"8px",fontSize:"25px"}} className='text-primary'/>
             <h3 className='text-primary ' style={{fontWeight:"bold"}}>Flywere</h3>
             
                </div>
              <div>
              <p className='footer-text'>
                flite export indonesia (Jakarta)
             </p>
             <p className='footer-text'>JI. Raya Bandara Soekarno-Hatta, Tangerang Banten,indonesia.</p>
           
              </div>
               </div>
              <div>
                <ul className='footer-content'>
                    <div>
                    <li style={{display:"flex",flexDirection:'column',fontSize:"18px",color:'#000000'}}>About</li>
                      {About.map((d)=>(
                        <li>{d}</li>
                      ))}
                    </div>
                    <div>
                    <li style={{display:"flex",flexDirection:'column',fontSize:"18px",color:'#000000'}}>Help</li>
                      {Help.map((d)=>(
                        <li>{d}</li>
                      ))}
                    </div>
                    <div>
                    <li style={{display:"flex",flexDirection:'column',fontSize:"18px",color:'#000000'}}>Social</li>
                      {Social.map((d)=>(
                        <li>{d}</li>
                      ))}
                    </div>
                </ul>
             </div>
         </div>
      <div className="footer-content">
        <p style={{textAlign:"center",color:"#ccc",fontWeight:"bold",fontSize:"19px"}}>© 2023 Flywere . All rights reserved.</p>
       
      </div>
    </footer>
  );
}

export default Footer;
