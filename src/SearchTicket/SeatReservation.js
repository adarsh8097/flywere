import React, { useState } from "react";
import './Seatreservation.css';
import { useNavigate } from "react-router-dom";

function Seatreservation() {
    const navigate = useNavigate();
    const [selectedSeat, setSelectedSeat] = useState(null);

    // Generate the seats array
    const rows = ['A', 'B', 'C', 'D'];
    const seats = [];

    rows.forEach((row) => {
        for (let i = 11; i >= 1; i--) {
            seats.push({ id: `${row}${i}`, seatNumber: `${row}${i}` });
        }
    });

    // Function to set the selected seat
    const handleSeatClick = (seatNumber) => {
        setSelectedSeat(seatNumber);
    };

    const handlebutton = () => {
        navigate('/');
    }

    const handleNext = () => {
        navigate('../ticketreview');
    }

    return (
        <div>
            <div className="seat-grid mt-2">
                {seats.map((seat) => (
                    <div
                        key={seat.id}
                        className={`seat ${seat.seatNumber === selectedSeat ? 'text-light bg-primary' : ''}`}
                        onClick={() => handleSeatClick(seat.seatNumber)}
                    >
                        {seat.seatNumber}
                    </div>
                ))}
            </div>
            <div className="succes">
                <button 
                    className="border border-info text-info mt-2 p-2" 
                    style={{ borderRadius: "2rem", marginRight: "2rem", width: "150px" }} 
                    onClick={handlebutton}
                >
                    Previous
                </button>
                <button 
                    className="btn btn-primary " 
                    style={{ borderRadius: "2rem", marginRight: "2rem", width: "150px" }} 
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Seatreservation;
