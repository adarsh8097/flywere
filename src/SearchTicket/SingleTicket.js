import React from "react";
import { useParams } from "react-router-dom";
import { ticket } from "../Page/Airpots";
 
 export let SingleCard =()=>{

     let {id} = useParams();
     console.log(id);
     const selectedTicket = ticket.find((t) => t.id === parseInt(id, 10));
     console.log(selectedTicket);
     

     
     return(
        <div>
             {/* <h2>This is new Item{id}</h2> */}
             <div className="container">
             <div className="card ticket-shap mt-3">
                    <div className="card-header d-flex" key={selectedTicket.id}>
                        <div className="card-db">
                            
                            <img src={selectedTicket.image} alt="img-airspace" width="100px"/>
                        </div>
                        <div className="card-ticketbooking d-flex" style={{justifyContent: "space-between",width:"100%"}}>
                             <p className="fs-5 fw-bold"style={{marginLeft:"2rem"}}>Air Asia Airlines</p>
                             <p className="fs-6 fw-bold mt-1">Economy class</p>
                        </div>
                    </div>
                    <div className="ticket-modal">
                    <div className="card-body">
                         <p className="text-secondary fw-bold">Depart</p>
                          <h4>{selectedTicket.time ? selectedTicket.time : "20:00"}</h4>
                          <p>{selectedTicket.startDate ? selectedTicket.startDate:"4 October 2023"}</p>
                          <p className="text-secondary">Soekarno-Hatta Airport</p>
                        </div>
                        <div className="mt-5 d-flex" style={{marginRight:"2rem",flexDirection:"column"}}>
                                 <span className="border text-center border  text-primary" style={{borderRadius:"2rem",padding:"2px",backgroundColor:"#cccc",width:"200px"}}>{selectedTicket.duration ? selectedTicket.duration :"12 hr 30 min"}</span>
                                 <span className="text-secondary text-center fs-6" style={{marginRight:"5rem"}} >{selectedTicket.stop?selectedTicket.stop:"2"}&nbsp;Stop</span>
                         </div>
                        <div className="card-body">
                         <p className="text-secondary fw-bold">Arive</p>
                          <h4>{selectedTicket.endTime?selectedTicket.endTime:"12:25"}</h4>
                          <p>{selectedTicket.endDate?selectedTicket.endDate:"5 October 2023"}</p>
                          <p className="text-secondary">John F.Kennedy International Airport</p>
                        </div>
                    </div>
                </div>
                {/* <div className="card-review d-flex mt-2 fw-bold" style={{justifyContent:"space-around",cursor:"pointer"}} onClick={handleTravler}>
                {review.map((r,index)=>(
                    <div key={index} className={index === 0 ? "text-primary":""}
                     onClick={()=> handleTravler(index)}
                    >
                     <p>{r} &nbsp;<IoIosArrowForward /></p>
                     </div>
                ))}
                </div>
                <UserForm/> */}
            </div>
            </div>
     );
 }