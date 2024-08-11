import React from "react";
import './SearchTicket.css';
import Hader from "../Page/Hader";
import { TiKey, TiWeatherPartlySunny } from "react-icons/ti";
import { IoSunny } from "react-icons/io5";
import { IoMdPartlySunny } from "react-icons/io";
import { FaCloudMoon } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

function SearchTicket(){
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
        let Layover = ['None Stop','1 Stop','2 Stop'];

        let ticket =[
            {
              "id": 1,
              "image": "https://assets.planespotters.net/files/airlines/4/airasia-india_8e98a7_opk.png",
              "stop": "2",
              "startDate": "2024 October 04",
              "endDate": "2024 October 07",
              "time": "20:15",
              "endTime": "12:25",
              "price": "$241",
              "duration":"11 hr 30 min"

            },
            {
              "id": 2,
              "image": "https://www.aslaviationholdings.com/wp-content/uploads/2024/04/ASL-Airlines-Australia-Logo-2023.jpg",
              "stop": "1",
              "startDate": "2024 October 08",
              "endDate": "2024 October 10",
              "time": "14:30",
              "endTime": "18:45",
              "price": "$244",
              "duration":"12 hr 30 min",
            },
            {
              "id": 3,
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Avianca_Logo.svg/2560px-Avianca_Logo.svg.png",
              "stop": "3",
              "startDate": "2024 October 12",
              "endDate": "2024 October 15",
              "time": "09:00",
              "endTime": "13:00",
              "price": "$350",
              "duration":"11 hr 30 min",
            },
            {
              "id": 4,
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryXupXtaFypGyjuzar8VdRm9TUAHJL0wnZA&s",
              "stop": "2",
              "startDate": "2024 October 18",
              "endDate": "2024 October 20",
              "time": "06:00",
              "endTime": "10:15",
              "price": "$356",
              "duration":"10 hr 30 min",
            },
            {
              "id": 5,
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Air_Volta_logo.svg/1200px-Air_Volta_logo.svg.png",
              "stop": "2",
              "startDate": "2024 October 22",
              "endDate": "2024 October 25",
              "time": "11:30",
              "endTime": "15:55",
              "price": "$410",
              "duration":"19 hr",
            },
            {
              "id": 6,
              "image": "https://logos-world.net/wp-content/uploads/2023/06/Jet-Time-Logo.jpg",
              "stop": "Non",
              "startDate": "2024 October 28",
              "endDate": "2024 October 30",
              "time": "13:45",
              "endTime": "17:20",
              "price": "$419",
              "duration":"4 hr 30 min",
            },
            {
              "id": 7,
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNj0OHf2fYlgeYkqhhsjx3h44WAPBMfmqDQ&s",
              "stop": "Non",
              "startDate": "2024 November 01",
              "endDate": "2024 November 03",
              "time": "08:15",
              "endTime": "11:50",
              "price": "$440",
              "duration":"4 hr 30 min",    
            }
          ]
          
          const handlefunction=()=>{
            navigate('../ticket');
          }
     return(
        <div>
            <Hader/>
            <div className="container d-flex">
            <div className="container search-ticket">
                 <div className="card-header d-flex mt-2" style={{justifyContent:'space-around',borderBottom:"1px solid black"}}>
                 <p className="card-fist">Filter</p>
                 <p className="card-fist text-primary">Reset</p>
                 </div>
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
                <input type="range" style={{width:"300px"}}/>
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
                <h4>Number of Layover</h4>
                 <div className="d-flex" style={{flexDirection:"row"}}>
                    
                     <div className="container d-flex" style={{flexDirection:"column"}}>
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
                <div className="container mt-4">
                     <div className="d-flex" style={{justifyContent:"space-between"}}>
                        <h4 style={{color:"#000000"}}>we have <strong>7 ticket</strong> from <strong>Jakarta</strong> to <strong>New York</strong></h4>
                     
                     <div className="d-flex" style={{gap:"10px"}} >
                        <p style={{fontWeight:"bold"}}>sort by</p>
                        <p style={{border:"1px solid black",borderRadius:"100px",width:'130px',padding:"2px",marginRight:"10px"}}> &nbsp;Cheapest <IoIosArrowDown style={{marginLeft:"2rem"}}/></p>
                     </div>
                     </div>
                     <div className="contaner" onClick={handlefunction} style={{cursor:"pointer"}}>
                       {ticket.map((t,index)=>(
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
                             {/* <p>{t.stop}</p>
                             <p>{t.time}</p>
                             <p>{t.endTime}</p>
                             
                             <p>{t.endDate}</p>
                             <p>{t.price}</p> */}
                            </div>
                       ))}
                     </div>
                    </div>
                    </div>
                    <Footer/>
            </div>
            
     );
}

export default SearchTicket;