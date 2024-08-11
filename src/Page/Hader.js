import React from 'react';
import './Hader.css';
import { BsAirplaneFill } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import Slider from '../Component/Silder';
import Hotel from '../Component/Hotel';
import Ticket from '../Component/Ticket';
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';
 function Hader(){
    const navigate = useNavigate();
     let handleTicket =[
        {
            id :"1",
            title:"Depart",
            date: "4 Octubar 2023",
            daye:"Sunday"
        }
        ,{
            id :"2",
            title:"Arive",
            date: "5 Octubar",
            daye:"Sunday"
        },
        {
            id :"3",
            title:"Passenger",
            date: "1 Guest",
            daye:"Economy class",
        }
     ];

     function handleClick(){
         navigate('/searchticket');
     }
     return(
       <>
       <div className='nav-bar'>
        <nav>
             
             <div className='demonav'>
             <BsAirplaneFill style={{marginTop:"8px",fontSize:"25px"}}/>
             <h3>Flywere</h3>
             </div>
         
           <ul>
                <li>Service</li>
                <li>About</li>
                <li>Contect</li>
            </ul>
           
           <div className='navbtn'>
           <button>Log in</button>
           <button style={{backgroundColor:"white",color:"rgb(72, 106, 133)"}}>Sign in</button>
           </div>
        </nav>
       
        <div className="container">
            <div className='modal-ticket'>
            <ul>
                <li>Airplane Ticket</li>
                <li>Airport Shuttle</li>
                <li>Booking Hotel</li>
             </ul>
            </div>
           </div>
           <div className='container'>
           <div className='modal-title'>
            <h3>Take Flight<br></br> &nbsp;with Easy!</h3>
            </div>
           </div>
        </div>
        <div className='container demo-ticket'>
            <div className='demo-card'>
               <div className='data-ticket'>
              <div className='radio-demo'>
              <input type='radio'/>&nbsp;
              <label>One way</label>
              </div>
                <div>
                <input type='radio' checked/>&nbsp;
                <label>Round Trip</label>
                </div>
                <div>
                <input type='radio'/>&nbsp;
                <label>Multi City</label>
                </div>
               </div>

               <div className='ticket-to'>
                 <div className='form-ticket-container'>
                    <div className='card form-ticket'>
                        <p className='title-ticket'>From</p>
                        <h5>Jakarta</h5>
                        <p className='title-ticket'>Soekarno-Hatta Airport</p>
                    </div>
                    <div className="arrow-icon">
                        <TbArrowsExchange style={{ fontSize: "24px"}} />
                    </div>
                    <div className='card'>
                        <p className='title-ticket' style={{marginLeft:"0.5rem"}}>To</p>
                        <h5  style={{marginLeft:"0.5rem"}}>New York</h5>
                        <p className='title-ticket'>John F. Kennedy International...</p>
                    </div>
                    </div>&nbsp;
                    <div className='d-flex' style={{gap:"20px"}}> 
                        {handleTicket.map((d,index)=>(
                            <div className='card'>
                                <div key="index">
                                 <p className='title-ticket'>{d.title}</p>
                                 <h5>{d.date}</h5>
                                 <p className='title-ticket'>{d.daye}</p>
                                </div>
                             </div>
                        ))}
                    </div>
               </div>
               <div className='container'>
                <div className='card-button'>
                <button className='btn btn-primary' style={{borderRadius:"1.5rem",width:"150px",fontWeight:"600",padding:"10px"}} onClick={handleClick}>Search Ticket</button>
       
                </div>
                    </div>
            </div>
           </div>
        {/* <Slider/> */}
        {/* <Hotel/> */}
        {/* <Ticket/> */}
        {/* <Footer/> */}
       </>
     );
 }

 export default Hader;
