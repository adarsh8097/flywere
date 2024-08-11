import React from "react";
import './Ticket.css';
import { GiTicket } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Ticket(){
    let navigate = useNavigate();
    let question =[
      {
         id:1,
         title:"How do I book a flite or hotel on flywere?",
         details: "visite our site,enter traivils details, choose options and processed to checkout for a seamsless booking exreince"
      },
      {
         id:2,
         title:"How do I book a flite or hotel on flywere?",
         details: "visite our site,enter traivils details, choose options and processed to checkout for a seamsless booking exreince"
      },
      {
         id:3,
         title:"How do I book a flite or hotel on flywere?",
         details: "visite our site,enter traivils details, choose options and processed to checkout for a seamsless booking exreince"
      },
      {
         id:4,
         title:"How do I book a flite or hotel on flywere?",
         details: "visite our site,enter traivils details, choose options and processed to checkout for a seamsless booking exreince"
      },
      {
         id:5,
         title:"How do I book a flite or hotel on flywere?",
         details: "visite our site,enter traivils details, choose options and processed to checkout for a seamsless booking exreince"
      },
      {
         id:6,
         title:"How do I book a flite or hotel on flywere?",
         details: "visite our site,enter traivils details, choose options and processed to checkout for a seamsless booking exreince"
      }
    ];

     function HandleNavbar(){
       navigate('../ticketreservation')
     }
   
     return(
       <>
        <div className="container">
             <div className=" ticket-item">
                 <div className="card-ticket">
                 <h3  className="ticket-heading">Ordring ticket is no longer difficult</h3>
                 {/* <img src="https://img.freepik.com/premium-photo/happy-young-asian-tourist-woman-holding-passport-boarding-pass-with-baggage-going-travel-holidays-blue-background_74952-981.jpg" alt="ticket-img" width="250px" height="150px"/> */}
                 <p className="ticket-text">OverRiding ticket is no longer difficult seamless hassle-free await, ensuring convinance and swift transactions</p>
                </div>
             
                <div className="ticket-feture">
                   <p className="ticket-data" style={{marginLeft:"4rem",marginTop:"2rem"}}><BiSolidOffer style={{fontSize:"1.5rem"}}/>&nbsp;&nbsp;Guarented</p>
                    <p style={{marginTop:"1rem",marginLeft:"4rem"}}> <GiTicket style={{fontSize:"1.5rem"}}/> &nbsp; Easy Booking</p>
                    <p style={{marginTop:"1rem",marginLeft:"4rem"}}><MdOutlineElectricBolt style={{fontSize:"1.5rem"}}/> &nbsp; Fast Processing</p>
                </div>
                </div>
                 </div>
           <div className="card-description">
         <h3 className="text-white" style={{marginLeft:"12rem"}}>Partner Airlines</h3>
         <p className="card-flite">
            <strong style={{fontSize:"1.5rem"}}>Partner Airlines</strong><br></br>
           Thorough your extensive collabration with more then 200 leading Airlines world wide connecting you to any distination you want between connecting countries and city.
         </p>
        </div>
        <div className="desto">
        <h3 style={{textAlign:"center",color:"black",fontWeight:"bold"}}>Frequently Asked <br></br>Questions</h3>
        <div className="container query" style={{gap:"10px"}}>
           
          {question.map((q)=>(
            <div className="card " key={q.id}>
                  <div className="card-header" style={{fontWeight:"bold",fontSize:"1.1rem"}}>
                     {q.title}
                     </div>
                     <div className="card-body">
                        {q.details}
                        </div>
            </div>
          ))}
        </div>
         <div >
            <p style={{textAlign:"center",marginTop:"1.2rem",color:"black",fontWeight:"bold",fontSize:"1.2rem"}}>Need more question ? </p>
             <div className="d-flex" style={{flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
             <button className="btn btn-primary" style={{borderRadius:'1.5rem',width:"140px",fontWeight:"bold"}}>Contect Us</button>
             </div>
         </div>
         </div>
       
       </>
     );
 
}

export default Ticket;