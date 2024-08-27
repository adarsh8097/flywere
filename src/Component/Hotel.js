import React, { useState } from "react";
import './Hotel.css';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Hotel() {
     let [HotelMove , setHotelMove] = useState(0);
      let displayCard = 4;
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
        }, {
            id: 5,
            name: "Serene Retreat",
            price: "$352/night",
            rating: "(112 reviews)",
            location: "Miami, FL",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQf5JbWUQApKbde0mcDHJ-DxU3llLO1070PA&s"
        },
        {
            id: 6,
            name: "Emerald Lodge",
            price: "$499/night",
            rating: "(212 reviews)",
            location: "Aspen, CO",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAQf3DSHUz7HqtER7dPoNr-YftQmi25EfOA&s"
        },
        {
            id: 7,
            name: "Emerald Lodge",
            price: "$1,232/night",
            rating: "(222 reviews)",
            location: "New York, NY",
            imageUrl: "https://c4.wallpaperflare.com/wallpaper/360/515/601/night-in-las-vegas-bellagio-luxury-hotel-casino-hd-wallpapers-for-mobile-phones-laptops-and-pc-1920%C3%971080-wallpaper-preview.jpg"
        },
        {
            id: 8,
            name: "Blissful Heights",
            price: "$421/night",
            rating: "(100 reviews)",
            location: "Phoenix, AZ",
            imageUrl: "https://p4.wallpaperbetter.com/wallpaper/774/41/278/5bd364ed51379-wallpaper-preview.jpg"
        }
    ];

    let current = hotels.length;
    const maxIndex = current - displayCard;

    const nextSlide = () => {
        setHotelMove((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1));
    }

    const prevSlide = () => {
        setHotelMove((prevIndex) => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1));
    };

     let handleToastify =()=>{
        toast.info("coming soon !");
     }

     let handleToastifyHeart =()=>{
        toast.error("Please login first !");
     }
    return (
        <div className=" container hotel-counter">
             <div className="arrow-left1" onClick={nextSlide}>
                <IoIosArrowBack  style={{marginTop:"-10px"}}/>
            </div>
            <div className="arrow-right1" onClick={prevSlide}>
                <IoIosArrowForward  style={{marginTop:"-14px"}}/>
            </div>
            <div className="slider-wrapper">
            <div className="hotel-container" 
            style={{ transform: `translateX(-${HotelMove * (100 / displayCard)}%)` }}
            >
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
                            <span class="fa fa-star checked rating"></span>
                            <span class="fa fa-star checked rating"></span>
                            <span class="fa fa-star checked rating"></span>
                            <span class="fa fa-star checked rating"></span>
                            <span class="fa fa-star checked rating"></span>
                            {hotel.rating}
                        </p>
                        <div className="d-flex" style={{justifyContent:"space-between",}}>
                        <p className="hotel-price">{hotel.price}</p>
                       
                         <BsHeart style={{marginTop:"5px",cursor:"pointer"}} onClick={handleToastifyHeart}/>
                            </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
         <div className="container">
             <div className="hotel-btn">
                <button className="btn btn-primary" style={{borderRadius:"1.2rem",width:"150px"}} onClick={handleToastify}>View All Packet</button>
                <ToastContainer/>
             </div> 
          </div>
         
        </div>
    );
}

export default Hotel;
