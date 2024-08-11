import React from "react";
import './Slider.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Slider() {
    const cardData = [
        {
            id: 1,
            date: "12 - 24 Jul",
            message: <> <strong>New Year's discount</strong> for Your families!</>,
            discount: "20%",
            imageUrl: 'https://img.freepik.com/free-photo/family-having-great-weekend_1098-1071.jpg',
            offer: "off",
        },
        {
            id: 2,
            date: "2- 11 Aug",
            message: <>weeekend with patner <strong>multi city only need</strong></>,
            discount: "$20",
            imageUrl: 'https://media.istockphoto.com/id/1126057647/photo/young-tourists-couple-on-walk-along-the-port.jpg?s=612x612&w=0&k=20&c=KA37wgE_gtslooMTLYRRJUnTCwbjnFtD7YKeJzxnjUs=',
            offer:"en"
        },
        {
            id: 3,
            date: "17- 20 Aug",
            message: <><strong>Give Away!! </strong>traviling to Indonesia only</>,
            discount: "10",
            imageUrl: 'https://img.freepik.com/free-photo/early-morning_1098-1845.jpg',
            offer: "guest",
        },
    ];

    return (
        <div className="container">
             <div className="arrow-left">
                <IoIosArrowBack  style={{marginTop:"-10px"}}/>
            </div>
            <div className="arrow-right">
                <IoIosArrowForward  style={{marginTop:"-14px"}}/>
            </div>
           <div className=" carddetails">
            {cardData.map((card, index) => (
                <div className="cardSlidertitle" key={card.id}>
                    <div
                        className="card-image"
                        style={{ backgroundImage: `url(${card.imageUrl})` }}
                    ></div>
                    <div className="card-text">
                        <p className="card-date">{card.date}</p>
                        <span>{card.message}</span>
                        <div className="" style={{display:"flex"}}>
                    <h3>{card.discount}</h3>&nbsp;
                    <p className="card-off" style={{marginTop:"20px"}}>{card.offer}</p>
                    </div>
                    </div>
              </div>
            ))}
           </div>
            <div className="container">
                <div className="slider-btn">
                <button className="btn btn-primary" style={{width:"50px",padding:"2px"}}></button>
                <button className="btn btn-secondary"style={{borderRadius:"50%",width:'10px',height:"10px",padding:"3px"}}></button>
                <button className="btn btn-secondary"style={{borderRadius:"50%",width:'10px',height:"10px",padding:"3px"}}></button>
                <button className="btn btn-secondary"style={{borderRadius:"50%",width:'10px',height:"10px",padding:"3px"}}></button>
                
                </div>
            </div>
        </div>
    );
}
export default Slider;