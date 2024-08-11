import React from "react";
import './NavItem.css';
import { BsAirplaneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function HandleNavbar(){
     const navigate = useNavigate();

      const handleChange =()=>{
           navigate('/');
      }
     return(
        <nav className="navbar">
         <div className='demonav' onClick={handleChange} style={{cursor:"pointer"}}>
        <BsAirplaneFill className="text-primary" style={{marginTop:"8px",fontSize:"25px"}}/>
        <h3 className="text-primary" style={{}}>Flywere</h3>
        </div>
    
      <ul className="mt-2"style={{}}>
           <li className="text-dark">Service</li>
           <li className="text-dark" >About</li>
           <li className="text-dark">Contect</li>
       </ul>
      
      <div className='navbtn'>
      <button className="border border-info text-primary" style={{backgroundColor:"white",width:"150px"}}>Log in</button>
      <button className="btn btn-primary text-white" style={{width:"150px"}}>Sign in</button>
      </div>
   </nav>
     );
}
export default HandleNavbar;