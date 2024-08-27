import React from "react";
import './NavItem.css';
import { BsAirplaneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBars } from "react-icons/fa";
function HandleNavbar(){
     const navigate = useNavigate();

      const handleChange =()=>{
           navigate('/');
      }

      function handleContectUS(){
          toast.info("coming soon!");
   
        }
     return(
        <nav className="navbar">
         <div className='demonav' onClick={handleChange} style={{cursor:"pointer"}}>
        <BsAirplaneFill className="text-primary" style={{marginTop:"8px",fontSize:"25px"}}/>
        <h3 className="text-primary" style={{}}>Flywere</h3>
        </div>
    
      <ul className="mt-2"style={{cursor:"pointer"}}>
           <li className="text-dark" onClick={handleContectUS}>Service</li>
           <li className="text-dark" onClick={handleContectUS}>About</li>
           <li className="text-dark" onClick={handleContectUS}>Contect</li>
       </ul>
       <div className='bardemo' onClick={handleContectUS}>
             <FaBars style={{fontSize:"24px",cursor:"pointer"}}/>
            </div>
           
      
      <div className='navbtn'>
      <button className="border border-info text-primary" style={{backgroundColor:"white",width:"150px"}} onClick={handleContectUS}>Log in</button>
      <button className="btn btn-primary text-white" style={{width:"150px"}} onClick={handleContectUS}>Sign in</button>
      </div>
   </nav>
     );
}
export default HandleNavbar;


