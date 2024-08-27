import React, { useState } from "react";

// Exporting the airports data as an object
export const handleAirports = {
    airports: [
        { city: "Mumbai", airportName: "Chhatrapati Shivaji Maharaj International Airport" },
        { city: "Delhi", airportName: "Indira Gandhi International Airport" },
        { city: "Bengaluru", airportName: "Kempegowda International Airport" },
        { city: "Chennai", airportName: "Chennai International Airport" },
        { city: "Kolkata", airportName: "Netaji Subhas Chandra Bose International Airport" },
        { city: "Hyderabad", airportName: "Rajiv Gandhi International Airport" },
        { city: "Kochi", airportName: "Cochin International Airport" },
        { city: "Pune", airportName: "Pune International Airport" },
        { city: "Ahmedabad", airportName: "Sardar Vallabhbhai Patel International Airport" },
        { city: "Goa", airportName: "Goa International Airport" },
        { city: "Thiruvananthapuram", airportName: "Thiruvananthapuram International Airport" },
        { city: "Guwahati", airportName: "Lokpriya Gopinath Bordoloi International Airport" },
        { city: "Jaipur", airportName: "Jaipur International Airport" },
        { city: "Amritsar", airportName: "Sri Guru Ram Dass Jee International Airport" },
        { city: "Nagpur", airportName: "Dr. Babasaheb Ambedkar International Airport" }
    ]
};
 

export let ticket =[   
    {
      "id": 1,
      "image": "https://assets.planespotters.net/files/airlines/4/airasia-india_8e98a7_opk.png",
      "stop": "2",
      "startDate": "04 October 2024",
      "endDate": "07 October 2024",
      "time": "20:15",
      "endTime": "12:25",
      "price": "$241",
      "duration":"11 hr 30 min"

    },
    {
      "id": 2,
      "image": "https://www.aslaviationholdings.com/wp-content/uploads/2024/04/ASL-Airlines-Australia-Logo-2023.jpg",
      "stop": "1",
      "startDate": "08 October 2024",
      "endDate": "10 October 2024",
      "time": "14:30",
      "endTime": "18:45",
      "price": "$244",
      "duration":"12 hr 30 min",
    },
    {
      "id": 3,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Avianca_Logo.svg/2560px-Avianca_Logo.svg.png",
      "stop": "3",
      "startDate": "12 October 2024",
      "endDate": "15 October 2024",
      "time": "09:00",
      "endTime": "13:00",
      "price": "$350",
      "duration":"11 hr 30 min",
    },
    {
      "id": 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryXupXtaFypGyjuzar8VdRm9TUAHJL0wnZA&s",
      "stop": "2",
      "startDate": "18 October 2024",
      "endDate": "20 October 2024",
      "time": "06:00",
      "endTime": "10:15",
      "price": "$356",
      "duration":"10 hr 30 min",
    },
    {
      "id": 5,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Air_Volta_logo.svg/1200px-Air_Volta_logo.svg.png",
      "stop": "2",
      "startDate": "22 October 2024",
      "endDate": "25 October 2024",
      "time": "11:30",
      "endTime": "15:55",
      "price": "$410",
      "duration":"19 hr 00 min",
    },
    {
      "id": 6,
      "image": "https://logos-world.net/wp-content/uploads/2023/06/Jet-Time-Logo.jpg",
      "stop": "Non",
      "startDate": "28 October 2024",
      "endDate": "30 October 2024",
      "time": "13:45",
      "endTime": "17:20",
      "price": "$419",
      "duration":"4 hr 30 min",
    },
    {
      "id": 7,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNj0OHf2fYlgeYkqhhsjx3h44WAPBMfmqDQ&s",
      "stop": "Non",
      "startDate": "01 November 2024 ",
      "endDate": "03 November 2024 ",
      "time": "08:15",
      "endTime": "11:50",
      "price": "$440",
      "duration":"4 hr 30 min",    
    },
    {
        "id": 8,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryXupXtaFypGyjuzar8VdRm9TUAHJL0wnZA&s",
        "stop": "2",
        "startDate": "18 October 2024",
        "endDate": "20 October 2024",
        "time": "06:00",
        "endTime": "10:15",
        "price": "$150",
        "duration":"10 hr 30 min",
      },
  ]

export default function ModalSearchItem() {
    const [filteredAirports, setFilteredAirports] = useState(handleAirports.airports);
    const [selectedAirport, setSelectedAirport] = useState("");

    const handleInput = (e) => {
        const term = e.target.value;
        setSelectedAirport(term);
        if (term) {
            setFilteredAirports(
                handleAirports.airports.filter((d) =>
                    d.city.toLowerCase().includes(term.toLowerCase())
                )
            );
        } else {
            setFilteredAirports(handleAirports.airports); // Show all airports if input is empty
        }
    };

    const handleSelect = (airport) => {
        setSelectedAirport(airport.city);
        setFilteredAirports([]);
    };

    return (
        <div>
           
            <div className="container w-25 border">
                <div className="card w-100 vh-25" style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <input
                        type="text"
                        value={selectedAirport}
                        placeholder="Search for airports"
                        className="p-2 mb-3 border rounded-1"
                        onChange={handleInput}
                    />
                    {filteredAirports.map((airport, index) => (
                        <div 
                            key={index} 
                            className="card mb-2 p-2" 
                            onClick={() => handleSelect(airport)}
                            style={{ cursor: "pointer" }}
                        >
                            <p className="mb-0">{airport.city}</p>
                            <small className="text-muted">{airport.airportName}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

