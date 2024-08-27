import React,{useState} from 'react';
import './Hader.css';
import { BsAirplaneFill } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import Slider from '../Component/Silder';
import Hotel from '../Component/Hotel';
import Ticket from '../Component/Ticket';
import Footer from '../Component/Footer';
import { Form, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import ModalSearchItem from './Airpots';
import { handleAirports } from './Airpots';
import { toast } from 'react-toastify';
import { MdLocalAirport } from "react-icons/md";

// import {handleAirpots} from './Airpots';


 function Hader(){
    const navigate = useNavigate();
    const[isModalOpen,setIsModalOpen] = useState(false);
    const[isModalOpenTo, setIsModalOpenTo] = useState(false);
    // const [fromAirpots , setFormAirpots] = useState("")
    // const [fromAirport, setFromAirport] = useState("");
    const[fromAirportName,setFormAirpotsName] = useState("");
    // const [fromAirportTo, setFromAirportTo] = useState("");
    const[fromAirportNameTo,setFormAirpotsNameTo] = useState("");
     const{fromAirport , fromAirportTo,setFromAirport,setFromAirportTo} = UseAirPot();
    
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

      
     const handleInputClickTo =()=>{
         setIsModalOpenTo(true);
     }

    const handleInputClick = () => {
         setIsModalOpen(true);
     };
 
     const handleSelectAirport = (airport) => {
         setFromAirport(airport.city);
         setFormAirpotsName(airport.airportName);
         setIsModalOpen(false);
         
     };

     const handleSelectAirportTo = (airport) => {
        setFromAirportTo(airport.city);
        setFormAirpotsNameTo(airport.airportName);
        setIsModalOpenTo(false);
       
    };


     function handleClick(){
         navigate('/searchticket');
     }

     function handleContectUS(){
        toast.info("coming soon!");
 
      }
     return (
       <>
       <div className='nav-bar'>
        <nav>
             <div className='demonav'>
             <BsAirplaneFill style={{marginTop:"8px",fontSize:"25px"}}/>
             <h3>Flywere</h3>
             </div>
         
           <ul style={{cursor:'pointer'}}>
                <li onClick={handleContectUS}>Service</li>
                <li onClick={handleContectUS}>About</li>
                <li onClick={handleContectUS}>Contect</li>
            </ul>
           
           <div className='navbtn'>
           <button onClick={handleContectUS}>Log in</button>
           <button style={{backgroundColor:"white",color:"rgb(72, 106, 133)"}} onClick={handleContectUS}>Sign in</button>
           </div>
           <div className='bar' onClick={handleContectUS}>
             <FaBars style={{fontSize:"24px",cursor:"pointer"}}/>
           </div>
        </nav>
       
        <div className="container">
            <div className='modal-ticket'>
            <ul> 
                <li >Airplane Ticket</li>
                <li onClick={handleContectUS}>Airport Shuttle</li>
                <li onClick={handleContectUS}>Booking Hotel</li>
             </ul>
            </div>
           </div>
           <div className='container'>
           <div className='modal-title'>
            <h3>Take Flight<br></br> &nbsp;with Easy!</h3>
            </div>
           </div>
           <div className='d-flex' style={{justifyContent:"center",alignItems:"center"}}>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/018/107/398/small/aircraft-or-airplane-on-front-view-png.png' alt='img' className='miniflite'/>
           </div>
        </div>
        <div className='container demo-ticket'>
            <div className='demo-card'>
               <div className='data-ticket'>
              <div className='radio-demo'>
              <input type='radio' name="round" id="round" value="round" />&nbsp;
                <label htmlFor='round'>One Way</label>
                </div>
                <div>
                <input type='radio' name="round" id="round" value="round" />&nbsp;
                <label htmlFor='round'>Round Trip</label>
                </div>
                <div>
                <input type='radio' name="round" id="multi" value="multi"/>&nbsp;
                <label htmlFor='multi'>Multi City</label>
                </div>
               </div>
        <div className="ticket-to">
            <div className="form-ticket-container">
                <div className="carditem form-ticket">
                    <p className="title-ticket" style={{position:"relative"}}>
                        <input
                            type="text"
                            placeholder="From"
                            style={{ outline: "none", border: "none", padding: "0", margin: "0" }}
                            onClick={handleInputClick}
                            readOnly
                        />
                        {isModalOpen && (
                            <div className="modal-search card p-2" style={{zIndex:"1000",position:"absolute",backgroundColor:"white"}}>
                                <ModalSearchItemMenu onSelectAirport={handleSelectAirport} />
                            </div>
                        )}
                    </p>
                    <h5>{fromAirport ? fromAirport:"Jakarta"}</h5>
                    <p className="title-ticket" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "200px" }}>
                    {fromAirportName ? fromAirportName : "Soekarno-Hatta Airport"}
                      </p>
                </div>
                <div className="arrow-icon">
                    <TbArrowsExchange style={{ fontSize: "24px" }} />
                </div>
                <div className="carditem">
                    <p className="title-ticket" style={{ marginLeft: "0.5rem",position:"relative"}}>
                        <input
                            type="text"
                            placeholder="To"
                            style={{ outline: "none", border: "none", padding: "0", margin: "0" }}
                            onClick={handleInputClickTo}
                        />
                         {isModalOpenTo && (
                            <div className="modal-search card p-2" style={{zIndex:"1000",position:"absolute",backgroundColor:"white",}}>
                                <ModalSearchItemTo onSelectAirportTo={handleSelectAirportTo} />
                            </div>
                        )}
                    </p>
                    <h5 style={{ marginLeft: "0.5rem" }}>{fromAirportTo ? fromAirportTo:"New York"}</h5>
                    <p className="title-ticket" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "200px"}}>
                    {fromAirportNameTo ? fromAirportNameTo:"John F. Kennedy International..."}</p>
                </div>
            </div>
            &nbsp;
            <div className="d-flex deatilscard">
                {handleTicket.map((d, index) => (
                    <div className="cardItem" key={index}>
                        <div key="index">
                            <p className="title-ticket">{d.title}</p>
                            <h5>{d.date}</h5>
                            <p className="title-ticket">{d.daye}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
             
               <div className='container'>
                <div className='card-button'>
                <button className='btn btn-primary' style={{borderRadius:"1.5rem",width:"150px",fontWeight:"600",padding:"10px",marginBottom:"10px"}} onClick={handleClick}>Search Ticket</button>
       
                </div>
                    </div>
            </div>

           </div>
           {/* <UseAirPot fromAirportTo ={fromAirportTo} fromAirport={fromAirport}/> */}
       </>
     );
 }

 function ModalSearchItemMenu({ onSelectAirport }) {
    const [filteredAirports, setFilteredAirports] = useState(handleAirports.airports);
     const handleInput = (e) => {
        const term = e.target.value;
        if (term) {
            setFilteredAirports(
                handleAirports.airports.filter((d) =>
                    d.city.toLowerCase().includes(term.toLowerCase())
                )
            );
        } else {
            setFilteredAirports(handleAirports.airports);
        }
    };
 return (
        <div className="modal-content">
            <input
                type="text"
                placeholder="Search for airports"
                className="p-2 mb-3 border rounded-1"
                onChange={handleInput}
            />
            <div className='no-scrollbar' style={{ maxHeight: "200px", overflowY: "auto" }}>
                {filteredAirports.map((airport, index) => (
                    <div
                        key={index}
                        className="card mb-2 p-2 d-flex" 
                        onClick={() => onSelectAirport(airport)}
                        style={{ cursor: "pointer",flexDirection:"row", gap:"10px"}}
                    ><div><MdLocalAirport/></div>
                        <div>
                        <p className="mb-0">{airport.city}</p>
                        <small className="text-muted">{airport.airportName}</small>
                        </div>
                    </div>
                    
                ))}
            </div>
             
        </div>

    );
}

function ModalSearchItemTo({onSelectAirportTo}){
    const[filteredAirportsTo,setFilteredAirportsTo] = useState(handleAirports.airports);
  
    const handleInputData =(e)=>{

        let term = e.target.value;

       if (term) {
           setFilteredAirportsTo(
               handleAirports.airports.filter((d) =>
                   d.city.toLowerCase().includes(term.toLowerCase())
               )
           );
       } else {
           setFilteredAirportsTo(handleAirports.airports);
       }
   }
    return(
        <>
          <div className="modal-content">
            <input
                type="text"
                placeholder="Search for airports"
                className="p-2 mb-3 border rounded-1"
                onChange={handleInputData}
            />
            <div className='no-scrollbar' style={{ maxHeight: "200px", overflowY: "auto",}}>
                {filteredAirportsTo.map((airport, index) => (
                    <div
                        key={index}
                        className="card mb-2 p-2 d-flex"
                        onClick={() => onSelectAirportTo(airport)}
                        style={{ cursor: "pointer",flexDirection:"row", gap:"10px" }}

                    >
                       <div><MdLocalAirport/></div>
                        <div>
                        <p className="mb-0">{airport.city}</p>
                        <small className="text-muted">{airport.airportName}</small>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
        </>
    )
}
 export default Hader;


 export const UseAirPot =()=>{
    const [fromAirport, setFromAirport] = useState("");
    const [fromAirportTo, setFromAirportTo] = useState("");
    const [setSelectedId , setIsSelectedId] = useState(null);
    
     console.log("FromAirport",fromAirport);
     console.log("FromAirPotsto",fromAirportTo);
     
     

    return(
        {
            fromAirport,
             setFromAirport,
             fromAirportTo,
             setFromAirportTo,
             setIsSelectedId,
             setSelectedId,
             
        }
    );
 }