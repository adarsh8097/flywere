import React, { useState, useEffect } from 'react';
import './Hader.css';
import { BsAirplaneFill } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

// Loader component (can be custom or from a library)
function Loader() {
    return <div className="loader">Loading...</div>; // Simple loader (you can customize or use a library)
}

function Hader() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleTicket = [
        {
            id: "1",
            title: "Depart",
            date: "4 October 2023",
            day: "Sunday"
        },
        {
            id: "2",
            title: "Arrive",
            date: "5 October",
            day: "Sunday"
        },
        {
            id: "3",
            title: "Passenger",
            date: "1 Guest",
            day: "Economy class"
        }
    ];

    useEffect(() => {
        // Simulate a loading delay (e.g., fetching data)
        setTimeout(() => {
            setLoading(false); // Stop loading after 2 seconds
        }, 2000);
    }, []);

    function handleClick() {
        navigate('/searchticket');
    }

    if (loading) {
        return <Loader />; // Show loader while loading
    }

    return (
        <>
            <div className='nav-bar'>
                <nav>
                    <div className='demonav'>
                        <BsAirplaneFill style={{ marginTop: "8px", fontSize: "25px" }} />
                        <h3>Flywere</h3>
                    </div>

                    <ul>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <div className='navbtn'>
                        <button>Log in</button>
                        <button style={{ backgroundColor: "white", color: "rgb(72, 106, 133)" }}>Sign in</button>
                    </div>
                </nav>

                <div className="container">
                    <div className='modal-ticket'>
                        <ul>
                            <li>Airplane Ticket</li>
                            <li>Airport Shuttle</li>
                            <li>Booking Hotel</li>
                        </ul>
                    </div>
                </div>
                <div className='container'>
                    <div className='modal-title'>
                        <h3>Take Flight<br /> &nbsp;with Easy!</h3>
                    </div>
                </div>
            </div>
            <div className='container demo-ticket'>
                <div className='demo-card'>
                    <div className='data-ticket'>
                        <div className='radio-demo'>
                            <input type='radio' />&nbsp;
                            <label>One way</label>
                        </div>
                        <div>
                            <input type='radio' checked />&nbsp;
                            <label>Round Trip</label>
                        </div>
                        <div>
                            <input type='radio' />&nbsp;
                            <label>Multi City</label>
                        </div>
                    </div>

                    <div className='ticket-to'>
                        <div className='form-ticket-container'>
                            <div className='card form-ticket'>
                                <p className='title-ticket'>From</p>
                                <h5>Jakarta</h5>
                                <p className='title-ticket'>Soekarno-Hatta Airport</p>
                            </div>
                            <div className="arrow-icon">
                                <TbArrowsExchange style={{ fontSize: "24px" }} />
                            </div>
                            <div className='card'>
                                <p className='title-ticket' style={{ marginLeft: "0.5rem" }}>To</p>
                                <h5 style={{ marginLeft: "0.5rem" }}>New York</h5>
                                <p className='title-ticket'>John F. Kennedy International...</p>
                            </div>
                        </div>&nbsp;
                        <div className='d-flex' style={{ gap: "20px" }}>
                            {handleTicket.map((d, index) => (
                                <div className='card' key={index}>
                                    <div>
                                        <p className='title-ticket'>{d.title}</p>
                                        <h5>{d.date}</h5>
                                        <p className='title-ticket'>{d.day}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='container'>
                        <div className='card-button'>
                            <button className='btn btn-primary' style={{ borderRadius: "1.5rem", width: "150px", fontWeight: "600", padding: "10px" }} onClick={handleClick}>Search Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hader;
