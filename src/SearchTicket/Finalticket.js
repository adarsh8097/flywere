import React from "react";
import './Finalticket.css';
import HandleNavbar from "./NavItem";
import Footer from "../Component/Footer";

function Finalticket() {
    return (
        <div className="">
            <HandleNavbar />
            <div>
                <h4 style={{textAlign:"center",marginTop:"2rem"}}>Your E-Ticket is Ready!</h4>
                <div className="container">
                    <div className="card ticket-shap mt-3 w-100 ">
                        <div className=" d-flex">
                            <div className="card-db">
                                <img src="https://assets.planespotters.net/files/airlines/4/airasia-india_8e98a7_opk.png" alt="img-airspace" width="100px" />
                            </div>
                            <div className="card-ticketbooking d-flex" style={{ justifyContent: "space-between", width: "100%" }}>
                                <p className="fs-5 fw-bold" style={{ marginLeft: "2rem" }}>Air Asia Airlines</p>
                                <p className="fs-6 mt-1 text-info border border-info p-2" style={{ borderRadius: "0.5rem" }}>Economy class</p>
                            </div>
                        </div>
                        <div className="ticket-final">
                            <div className="ticket-modal">
                                <div className="adarsh"></div>
                                <div className="dotted-line"></div>
                                <div className="sandeep"></div>
                                <div className="card-body">
                                    <p className="text-secondary fw-bold">Depart</p>
                                    <h4>20:15</h4>
                                    <p>4 October 2023</p>
                                    <p className="text-secondary">Soekarno-Hatta Airport</p>
                                    <p>Show e-ticket and passenger identities during check-in.</p>
                                </div>
                                <div className="mt-5 d-flex" style={{ marginRight: "2rem", flexDirection: "column" }}>
                                    <span className="border text-center text-primary" style={{ borderRadius: "2rem", padding: "6px", backgroundColor: "#cccc", width: "200px" }}>12 hr 30 min</span>
                                    <span className="text-secondary text-center fs-6" style={{ marginRight: "5rem" }}>2&nbsp;Stop</span>
                                </div>
                                <div className="card-body">
                                    <p className="text-secondary fw-bold">Arrive</p>
                                    <h4>12:25</h4>
                                    <p>5 October 2023</p>
                                    <p className="text-secondary">John F.Kennedy International Airport</p>
                                    <p>Please be at the boarding gate at least 30 minutes before departure.</p>
                                </div>
                            </div>

                            <div className="container">
                                <div className=" w-100">
                                    <div className="d-flex">
                                        <div className="card-body" style={{ justifyContent: "space-between" }}>
                                            <p className="text-secondary fw-bold">Name</p>
                                            <h6>Muhamad Maljupri</h6>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-secondary fw-bold">Email</p>
                                            <h6>muljupri123@gmail.com</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                    <div className="card-body">
                                        <p className="text-secondary fw-bold">Passport Number</p>
                                        <h6>231454422</h6>
                                        <div className="border text-center fw-bold bg-light mt-2" style={{borderRadius:"0.8rem"}}>
                                            <p>Gate</p>
                                            <h4>24</h4>
                                        </div>
                                    </div>
                                        <div className="card-body">
                                        <p className="text-secondary fw-bold">Airlines Booking Code</p>
                                        <h5>G13BSZZ</h5>
                                        <div className="border text-center fw-bold bg-light mt-2" style={{borderRadius:"0.8rem"}}>
                                            <p>Seat</p>
                                            <h4>A2</h4>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                    <div className="d-flex"style={{justifyContent:"center"}}>
                    <button className="border border-info text-info mt-2 p-2 w-25" style={{borderRadius:"2rem",marginRight:"2rem",width:"150px"}}>Download</button>
                <button className="btn btn-primary w-25 mt-2" style={{borderRadius:"2rem",marginLeft:"12rem",width:"150px"}}>Share</button>
           
                    </div>
                    </div>
                </div>
               
            </div>
            </div>
            <Footer/>
         </div>
    );
}

export default Finalticket;
