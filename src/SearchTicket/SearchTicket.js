import React, { useState } from "react";
import './SearchTicket.css';
import Hader,{UseAirPot} from "../Page/Hader";
import { TiKey, TiWeatherPartlySunny } from "react-icons/ti";
import { IoSunny } from "react-icons/io5";
import { IoMdPartlySunny } from "react-icons/io";
import { FaCloudMoon } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import Ticket from "../Component/Ticket";
import { ticket } from "../Page/Airpots";

function SearchTicket(){
    const{fromAirport, fromAirportTo} = UseAirPot();
    let [isprice , setIsPrice] = useState(500);
    let [allStop , SetAllStop] = useState([]);
    const{setSelectedId, setIsSelectedId} = UseAirPot();
     console.log("FromTicketAirProt",fromAirport);
     console.log("FromTicketAirProt",fromAirportTo);
     
     
    const navigate = useNavigate();

        let days = [
            {
                id:1,
                Symbol:<TiWeatherPartlySunny/>,
                 title:"Morning",
                time:"00:00 - 11:59"
            },
            {
                id:2,
                Symbol:<IoSunny/>,
                title:"Noon",
                time:"12:00 - 14:59"
            },
            {
                id:3,
                Symbol:<IoMdPartlySunny/>,
                title:"Afternoon",
                time:"15:00 - 17:59"
            }, {
                id:4,
                Symbol:<FaCloudMoon/>,
                title:"Night",
                time:"18:00 - 23:59"
            },
            
            
        ];

        let price =[
            {
                id:1,
                title:"min-price",
                price: "$100",
            },
            {
                id:2,
                title:"max-price",
                price: "$402",
            },

        ]

        let Airlines = ['Air Asia','Aerolineas Argentinas','Avinca','Airlines Switzerlad','Airmlta','Airvolta','Citilink','Jettime','Jettime'];
        let Layover = ['None Stop','1 Stop','2 Stop','3 Stop'];

      
          
        

          let sortby = ["Discount Price","Early Departure","Late Departure","Early Arrival","Late Arival"];

           let handleInput =(e)=>{

             setIsPrice(e.target.value);

           }
 
           const handleInputfilter = (e) => {
            SetAllStop(e.target.value);
          };

           let filtercardPrice = ticket.filter((product)=>{
            let priceValue = parseFloat(product.price.replace('$',''));
             return priceValue <= isprice;
           });  

           console.log(filtercardPrice);

           const filterByCheckout = filtercardPrice.filter((product) => {
            if (allStop.length === 0)
                 return true;
               
            return allStop.includes(product.stop);
          });
         

        
        //   console.log(selectTicket);
          
          const handlefunction=(id)=>{
            const  selectTicket = ticket.find((t)=> t.id === id);
          if(selectTicket){
            navigate(`../ticket/${selectTicket.id}`);
          }else{
             console.log("Ticket not found");
             
          }

          }
           
     return(
        <div>
            <Hader/>
            <div className="container d-flex ticketcreateAi">
            <div className="container search-ticket">
                 <div className="card-header d-flex mt-2" style={{justifyContent:'space-around',borderBottom:"1px solid black"}}>
                 <p className="card-fist">Filter</p>
                 <p className="card-fist text-primary">Reset</p>
                 </div>
                 <div className="displycard-ticket">
                 <p>Departure Time</p>
                <div className="container count-day">
                 {days.map((d,index)=>(
                     <div className="card democard" key={index}>
                         <p style={{fontSize:'1.4rem'}}>{d.Symbol}</p>
                         <h4>{d.title}</h4>
                         <p>{d.time}</p>
                     </div>
                 ))}
                </div>
                <p>Price:</p>
                <input type="range" style={{width:"300px"}} onChange={handleInput} min={0} max ={500} value={isprice}/>
                <div className="count-price " style={{gap:"10px"}}>
                {price.map((d,index)=>(
                    <div key={index} className="card card-contetn">
                            <p className="" style={{color:"gray"}}>
                                {d.title}
                            </p>
                            <h4>{d.price}</h4>
                        </div>
                ))}
                </div>
                <div className="tickefilterdata">
                <h4>Number of Layover</h4>
                 <div className="d-flex searchTicket" style={{flexDirection:"row"}}>
                    
                     <div className="container d-flex" style={{flexDirection:"column"}} onChange={handleInputfilter}>
                        {Layover.map((l,index)=>(
                            <label key={index}>
                                   <input type="checkbox" value={l}/> &nbsp;
                                {l}
                            </label>
                        ))}
                       
                     </div>
                     <div className="mb-2 text-secondary">
                            <p className="mb-2" >+$405</p>
                            <p className="mb-2">+$356</p>
                            <p  className="mb-2"> +$241</p>
                        </div>
                 </div>

                 <h4 style={{marginLeft:"1rem",marginTop:"1rem"}}>Airlines</h4>
                 <div className="container d-flex" style={{flexDirection:"column"}}>
                    {Airlines.map((d,index)=>(
                        <label key={index} className="airline-checkbox">
                         <input type="checkbox" value={d} />&nbsp;&nbsp;
                        {d}
                    </label>
                    ))}
                </div>
                </div>
                </div>
                </div>
                <div className="container mt-4 ticketcreater">
                     <div className="d-flex cardcontent" style={{justifyContent:"space-between"}}>
                       <div>
                        <h4 className="itemtitle" style={{color:"#000000"}}>we have <strong>7 ticket</strong>from<strong>{fromAirport ? fromAirport:"Jakarta"}</strong> to <strong>{fromAirportTo ? fromAirportTo:"New York"}</strong></h4>
                        </div>
                     <div className="d-flex cardcontent" style={{gap:"10px"}} >
                        <p style={{fontWeight:"bold"}}>sort by</p>
                        <p style={{border:"1px solid black",borderRadius:"100px",width:'130px',padding:"2px",marginRight:"10px"}}> 
                            {/* &nbsp;Cheapest <IoIosArrowDown style={{marginLeft:"2rem"}}/> */}
                          
                           <select style={{border:"none",background:"#ccc",width:"100px",marginLeft:"10px",backgroundColor:"none",outlineOffset:"none"}}>
                             <option value="Chepest">Cheapest</option>
                            {sortby.map((d,index)=>(
                                <option key={index} value={d}>{d}</option>
                            ))}
                           </select>
                           </p>
                          
                     </div>
                     </div>
                     <div className="container" onClick={handlefunction}  style={{cursor:"pointer"}}>
                     
                       {filterByCheckout.length > 0 ? (
                        filterByCheckout.map((t,index)=>(
                            <div className="card ticket-coolecter m-2" key={t.id}  onClick={()=> handlefunction(t.id)}>
                                 <div className="titcket-ing mt-4">
                                    <img src={t.image} alt="ticket-brand" width="100px"/>
                                 </div>
                                 <div>
                                     <p className="text-secondary fw-bold">Depart</p>
                                    <h4>{t.time}</h4>
                                    <p className="text-secondary fs-6">4 October 2023</p>
                                 </div>
                                  <div className="mt-4 d-flex" style={{marginRight:"2rem",flexDirection:"column"}}>
                                     <span className="border text-center border  text-primary" style={{borderRadius:"2rem",padding:"2px",backgroundColor:"#cccc"}}>{t.duration}</span>
                                     <span className="text-secondary text-center fs-6">{t.stop}&nbsp;Stop</span>
                                  </div>
                                 <div>
                                     <p className="text-secondary fw-bold">Arive</p>
                                     <h4>{t.endTime}</h4>
                                     <p className="text-secondary fs-6 ">5 October 2023</p>
                                    </div>
                                 <div> 
                                    <p className="text-secondary fw-bold">Price</p>
                                    <h4>{t.price}</h4>
                                    </div>
                                
                                </div>
                           ))
                       ):(
                        filtercardPrice.map((t,index)=>(
                            <div className="card ticket-coolecter m-2" key={index} >
                                 <div className="titcket-ing mt-4">
                                    <img src={t.image} alt="ticket-brand" width="100px"/>
                                 </div>
                                 <div>
                                     <p className="text-secondary fw-bold">Depart</p>
                                    <h4>{t.time}</h4>
                                    <p className="text-secondary fs-6">4 October 2023</p>
                                 </div>
                                  <div className="mt-4 d-flex" style={{marginRight:"2rem",flexDirection:"column"}}>
                                     <span className="border text-center border  text-primary" style={{borderRadius:"2rem",padding:"2px",backgroundColor:"#cccc"}}>{t.duration}</span>
                                     <span className="text-secondary text-center fs-6">{t.stop}&nbsp;Stop</span>
                                  </div>
                                 <div>
                                     <p className="text-secondary fw-bold">Arive</p>
                                     <h4>{t.endTime}</h4>
                                     <p className="text-secondary fs-6 ">5 October 2023</p>
                                    </div>
                                 <div> 
                                    <p className="text-secondary fw-bold">Price</p>
                                    <h4>{t.price}</h4>
                                    </div>
                                
                                </div>
                           )))}
                       
                     </div>
                    </div>
                    </div>
                    <Footer/>
            </div>
            
     );
}

export default SearchTicket;