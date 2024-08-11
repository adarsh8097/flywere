import React from "react";
import './Hotel.css';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

function Hotel() {
    const hotels = [
        {
            id: 1,
            name: "Serene Retreat",
            price: "$352/night",
            rating: "(112 reviews)",
            location: "Miami, FL",
            imageUrl: "https://thumbs.dreamstime.com/b/luxury-hotel-4480742.jpg"
        },
        {
            id: 2,
            name: "Emerald Lodge",
            price: "$499/night",
            rating: "(212 reviews)",
            location: "Aspen, CO",
            imageUrl: "https://wallpapercave.com/wp/wp1846066.jpg"
        },
        {
            id: 3,
            name: "Emerald Lodge",
            price: "$1,232/night",
            rating: "(222 reviews)",
            location: "New York, NY",
            imageUrl: "https://c4.wallpaperflare.com/wallpaper/814/350/568/spa-beach-hotel-infinity-pool-wallpaper-preview.jpg"
        },
        {
            id: 4,
            name: "Blissful Heights",
            price: "$421/night",
            rating: "(100 reviews)",
            location: "Phoenix, AZ",
            imageUrl: "https://c4.wallpaperflare.com/wallpaper/20/164/15/booking-best-hotels-bangkok-tourism-wallpaper-preview.jpg"
        }
    ];

    return (
        <div className="hotel-counter">
             <div className="arrow-left1">
                <IoIosArrowBack  style={{marginTop:"-10px"}}/>
            </div>
            <div className="arrow-right1">
                <IoIosArrowForward  style={{marginTop:"-14px"}}/>
            </div>
            <div className="hotel-container">
            {hotels.map((hotel) => (
                <div className="hotel-card" key={hotel.id}>
                    <div
                        className="hotel-image"
                        style={{ backgroundImage: `url(${hotel.imageUrl})` }}
                    ></div> 
                    <div className="hotel-info">
                        <h3 className="hotel-name">{hotel.name}</h3>
                        <p className="hotel-location"><IoLocationOutline style={{color:"gray",fontSize:"1.2rem"}}/> New York,Us</p>
                        
                        <p className="hotel-rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            {hotel.rating}
                        </p>
                        <div className="d-flex" style={{justifyContent:"space-between",}}>
                        <p className="hotel-price">{hotel.price}</p>
                       
                         <BsHeart style={{marginTop:"5px"}}/>
                            </div>
                    </div>
                </div>
            ))}
        </div>
         <div className="container">
             <div className="hotel-btn">
                <button className="btn btn-primary" style={{borderRadius:"1.2rem",width:"150px"}}>View All Packet</button>
             </div>
         </div>
        </div>
    );
}

export default Hotel;
