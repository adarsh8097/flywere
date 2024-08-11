import React from "react";
import './Seatreservation.css';

function Seatreservation() {
    const rows = ['A', 'B', 'C', 'D'];
    const seats = [];

    rows.forEach((row) => {
        for (let i = 11; i >= 1; i--) {
            seats.push({ id: seats.length + 1, seatNumber: `${row}${i}` });
        }
    });

    return (
        <div>
            {/* <h2>Seat Reservation</h2> */}
            <div className="seat-grid mt-2">
                {seats.map((seat,index) => (
                    <div key={seat.id} 
                    className={`seat ${index === 9 ? 'text-light bg-primary' : ''}`}
                    >
                        {seat.seatNumber}
                    </div>
                ))}
            </div>
            <div>
                <button className="border border-info text-info mt-2 p-2" style={{borderRadius:"2rem",marginRight:"2rem",width:"150px"}}>Previous</button>
                <button className="btn btn-primary" style={{borderRadius:"2rem",marginRight:"2rem",width:"150px"}}>Next</button>
            </div>
        </div>
    );
}

export default Seatreservation;
