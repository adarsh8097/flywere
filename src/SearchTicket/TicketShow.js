import React from "react";
import './ticketShow.css';
import HandleNavbar from "./NavItem";
// import Ticket from "../Component/Ticket";
import { IoIosArrowForward } from "react-icons/io";
// import { Form } from "react-router-dom";
import UserForm from "./FormTicket";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

function TicketShow(){
    const navigate = useNavigate();
    let review = ["Traveler Details","Seat Reservation","Review","Payment"]
      const handleTravler=(index)=>{
        if(index === 1){
           navigate('../ticketreservation');
        }else if(index === 2){
             navigate('../ticketreview');
        }else if(index === 3){
             navigate('../payment');
        }
      }
    return(
        <>
        <div>
            <HandleNavbar/>
           <div className=" d-flex" style={{justifyContent:"space-evenly"}}>
           <div className="container">
                <div className="card ticket-shap mt-3">
                    <div className="card-header d-flex">
                        <div className="card-db">
                            <img src="https://assets.planespotters.net/files/airlines/4/airasia-india_8e98a7_opk.png" alt="img-airspace" width="100px"/>
                        </div>
                        <div className="card-ticketbooking d-flex" style={{justifyContent: "space-between",width:"100%"}}>
                             <p className="fs-5 fw-bold"style={{marginLeft:"2rem"}}>Air Asia Airlines</p>
                             <p className="fs-6 fw-bold mt-1">Economy class</p>
                        </div>
                    </div>
                    <div className="ticket-modal">
                    <div className="card-body">
                         <p className="text-secondary fw-bold">Depart</p>
                          <h4>20:15</h4>
                          <p>4 October 2023</p>
                          <p className="text-secondary">Soekarno-Hatta Airport</p>
                        </div>
                        <div className="mt-5 d-flex" style={{marginRight:"2rem",flexDirection:"column"}}>
                                 <span className="border text-center border  text-primary" style={{borderRadius:"2rem",padding:"2px",backgroundColor:"#cccc",width:"200px"}}>12 hr 30 min</span>
                                 <span className="text-secondary text-center fs-6" style={{marginRight:"5rem"}} >2&nbsp;Stop</span>
                         </div>
                        <div className="card-body">
                         <p className="text-secondary fw-bold">Arive</p>
                          <h4>12:25</h4>
                          <p>5 October 2023</p>
                          <p className="text-secondary">John F.Kennedy International Airport</p>
                        </div>
                    </div>
                </div>
                <div className="card-review d-flex mt-2 fw-bold" style={{justifyContent:"space-around",cursor:"pointer"}} onClick={handleTravler}>
                {review.map((r,index)=>(
                    <div key={index} className={index === 0 ? "text-primary":""}
                     onClick={()=> handleTravler(index)}
                    >
                     <p>{r} &nbsp;<IoIosArrowForward /></p>
                     </div>
                ))}
                </div>
                <UserForm/>
            </div>
           
            <div className="card mt-2 w-100 ticket-bill" style={{marginRight:"4rem",borderRadius:"1.2rem"}}>
                <h4 className="card-header">Fare Summary</h4>
                <div className="d-flex" style={{justifyContent:'space-around'}}>
                <div className="text text-secondary">
                <p>Food Snack, and Drink 3X</p>
                <p>Ticket</p>
                <p>Discount </p>
                </div>
                <div className="text text-secondary">
                    <p>$60</p>
                    <p>$160</p>
                    <p>-</p>
                </div>
                </div>
                <div>
                    <button className="btn border border-info text-info w-100 fw-bold " style={{borderRadius:"2rem"}}>Select Discount</button>
                    </div>
                    <div className="card-footer d-flex mt-3" style={{justifyContent:"space-between"}}>
                        <p>Total Summary</p>
                        <h5>$241</h5>
                    </div>
            </div>
            </div>
      
        </div>
        <Footer/>
            
            </>
     );
}

export default TicketShow;
