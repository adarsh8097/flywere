import React, { useState } from "react";
import './Slider.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // Number of cards to show at once

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
            message: <>Weekend with your partner <strong>Multi-city only need</strong></>,
            discount: "$20",
            imageUrl: 'https://media.istockphoto.com/id/1291682560/photo/young-couple-taking-break-from-sightseeing-for-selfie.jpg?s=612x612&w=0&k=20&c=0KK28cBPosGvfZsxPNyA9AqWUjBRzM0qGZcpzcQlDN8=',
            offer: "on",
        },
        {
            id: 3,
            date: "17- 20 Aug",
            message: <><strong>Give Away!!</strong> Travelling to Indonesia only</>,
            discount: "10%",
            imageUrl: 'https://img.freepik.com/free-photo/early-morning_1098-1845.jpg',
            offer: "guest",
        },
        {
            id: 4,
            date: "2- 11 Aug",
            message: <>Weekend with your partner <strong>Multi-city only need</strong></>,
            discount: "$20",
            imageUrl: 'https://plus.unsplash.com/premium_photo-1686824683682-f0ccce85b3f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291cGxlJTIwdHJhdmVsfGVufDB8fDB8fHww',
            offer: "on",
        },
        {
            id: 5,
            date: "17- 20 Aug",
            message: <><strong>Give Away!!</strong> Travelling to Indonesia only</>,
            discount: "10%",
            imageUrl: 'https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.webp?b=1&s=612x612&w=0&k=20&c=b6uSchGzwR2-q2CvdAF7BdCIcqEisu6i1ZMj8NQ3FUI=',
            offer: "guest",
        },
        {
            id: 6,
            date: "2- 11 Aug",
            message: <>Weekend with your partner <strong>Multi-city only need</strong></>,
            discount: "$20",
            imageUrl: 'https://media.istockphoto.com/id/1594264123/photo/couple-of-tourists-having-fun-walking-on-city-street-at-holiday-happy-friends-laughing.webp?b=1&s=612x612&w=0&k=20&c=MicGmckTMveqEPOuwZpbSCcX6sOU8m8bInWDTnXDkgM=',
            offer: "on",
        },
        {
            id: 7,
            date: "17- 20 Aug",
            message: <><strong>Give Away!!</strong> Travelling to Dndonesia only</>,
            discount: "10%",
            imageUrl: 'https://media.istockphoto.com/id/1929812569/photo/couple-man-and-woman-in-a-crystal-clear-ocean-in-the-caribbean-aruba-island-tres-trabi-beach.webp?b=1&s=612x612&w=0&k=20&c=2hv8haJRo-Tv3XNjoqPbMw5l8vPN8X6zAUm0rfOEwgU=',
            offer: "guest",
        },
        {
            id: 8,
            date: "17- 20 Aug",
            message: <><strong>Give Away!!</strong> Travelling to South-affirica only</>,
            discount: "10%",
            imageUrl: 'https://plus.unsplash.com/premium_photo-1686910560454-d52917b211fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvdXBsZSUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
            offer: "guest",
        },
        {
            id: 9,
            date: "17- 20 Aug",
            message: <><strong>Give Away!!</strong> Travelling to India</>,
            discount: "10%",
            imageUrl: 'https://media.istockphoto.com/id/1894051234/photo/african-american-senior-couple-eating-street-food-with-friends-in-hawaii.webp?b=1&s=612x612&w=0&k=20&c=dTv7_55Yaivcm2DYyFIWsjiu8GZsPrjONKBYRGFweWE=',
            offer: "guest",
        },
    ];

    const totalItems = cardData.length;
    const maxIndex = totalItems - itemsToShow;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1));
    };

    return (
        <div className="container slider-container">
            <div className="arrow-left" onClick={prevSlide}>
                <IoIosArrowBack style={{marginTop:"-22px",marginRight:"15px"}} />
            </div>
            <div className="slider-wrapper">
                <div
                    className="slider-content"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {cardData.map((card) => (
                        <div className="democardItem" key={card.id}>
                            <div
                                className="card-image"
                                style={{ backgroundImage: `url(${card.imageUrl})`}}
                            ></div>
                            <div className="card-text">
                                <p className="card-date">{card.date}</p>
                                <span>{card.message}</span>
                                <div className="discount-offer">
                                    <h3>{card.discount}</h3>&nbsp;
                                    <p className="card-off">{card.offer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="arrow-right" onClick={nextSlide}>
                <IoIosArrowForward  style={{marginTop:"-22px",marginRight:"4rem"}}/>
            </div>
        </div>
    );
}

export default Slider;
