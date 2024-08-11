import React from "react";
import './Finalticket.css';
import HandleNavbar from "./NavItem";
import Footer from "../Component/Footer";

function Finalticket() {
    return (
        <div className="ticketdatafinal-show">
            <HandleNavbar />
            <div>
                <h4 className="text-center mt-5">Your E-Ticket is Ready!</h4>
                <div className="container">
                    <div className="ticket-final">
                        <div className="card ticket-shap mt-4 w-100">
                            <div className="card-header d-flex align-items-center">
                                <div className="card-db">
                                    <img
                                        src="https://assets.planespotters.net/files/airlines/4/airasia-india_8e98a7_opk.png"
                                        alt="Air Asia Airlines"
                                        width="100px"
                                    />
                                </div>
                                <div className="card-ticketbooking d-flex justify-content-between w-100">
                                    <p className="fs-5 fw-bold ml-3">Air Asia Airlines</p>
                                    <p className="fs-6 fw-bold mt-1 mr-3">Economy Class</p>
                                </div>
                            </div>

                            <div className="ticket-modal">
                                <div className="card-body">
                                    <p className="text-secondary fw-bold">Depart</p>
                                    <h4>20:15</h4>
                                    <p>4 October 2023</p>
                                    <p className="text-secondary">Soekarno-Hatta Airport</p>
                                    <p className="text-secondary">Show e-ticket and Passenger identities during check-in.</p>
                                </div>
                                <div className="mt-5 d-flex flex-column align-items-center">
                                    <span className="border text-center text-primary bg-light p-2 mb-2" style={{ borderRadius: "2rem", width: "200px" }}>
                                        12 hr 30 min
                                    </span>
                                    <span className="text-secondary text-center fs-6">2 Stops</span>
                                </div>
                                <div className="card-body">
                                    <p className="text-secondary fw-bold">Arrive</p>
                                    <h4>12:25</h4>
                                    <p>5 October 2023</p>
                                    <p className="text-secondary">John F. Kennedy International Airport</p>
                                    <p className="text-secondary">Please be at the boarding gate at least 30 minutes before departure time.</p>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-4">
                            <div className="card" style={{ borderRadius: '1.2rem' }}>
                                <div className="card-header text-center">
                                    <p className="fs-6 mt-1 text-info border border-info p-2" style={{ borderRadius: "0.5rem" }}>
                                        Economy Class
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="card-body">
                                        <p className="text-secondary fw-bold">Name</p>
                                        <h6>Muhamad Maljupri</h6>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-secondary fw-bold">Email</p>
                                        <h6>muljupri123@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="card-body">
                                        <p className="text-secondary fw-bold">Passport Number</p>
                                        <h6>231454422</h6>
                                        <div className="border text-center fw-bold bg-light mt-2">
                                            <p>Gate</p>
                                            <h4>24</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-secondary fw-bold">Airlines Booking Code</p>
                                        <h5>G13BSZZ</h5>
                                        <div className="border text-center fw-bold bg-light mt-2">
                                            <p>Seat</p>
                                            <h4>A2</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex"style={{justifyContent:"center"}}>
                    <button className="border border-info text-info mt-2 p-2 w-25" style={{borderRadius:"2rem",marginRight:"2rem",width:"150px"}}>Download</button>
                <button className="btn btn-primary w-25 mt-2" style={{borderRadius:"2rem",marginRight:"2rem",width:"150px"}}>Share</button>
           
                    </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Finalticket;
