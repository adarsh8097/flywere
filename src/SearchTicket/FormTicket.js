import React, { useState } from "react";
import './FormTicket.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserForm() {
    const [title, setTitle] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        passportNumber: "",
        country: "",
        city: "",
        contactNumber: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTitle = (active) => {
        setTitle(active);
        setFormData({ ...formData, title: active });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(title === null){
             alert("Please select title !");
             return;
        }else{
            console.log("Form Data Submitted: ", formData);
        // Store the form data in localStorage
        sessionStorage.setItem('userFormData', JSON.stringify(formData));
        setFormData({
            title: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            passportNumber: "",
            country: "",
            city: "",
            contactNumber: "",
            email: ""
        });
    
        // Clear the title selection
        setTitle(null);
        // Here you can also handle other actions after form submission, like redirecting the user
        navigate('../ticketreservation');
     }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Select Title:</label>
                    <div className="d-flex" style={{ gap: "20px" }}>
                        <div>
                            <p 
                                className={`border p-2 ${title === 'Mr' ? 'bg-primary text-light fw-bold' : ''}`}
                                style={{ borderRadius: "0.5rem", cursor: "pointer" }}
                                onClick={() => handleTitle('Mr')}
                            >
                                Mr
                            </p>
                        </div>
                        <p 
                            className={`border p-2 ${title === 'Mrs' ? 'bg-primary text-light fw-bold' : ''}`}
                            style={{ borderRadius: "0.5rem", cursor: "pointer" }}
                            onClick={() => handleTitle('Mrs')}
                        >
                            Mrs
                        </p>
                        <p 
                            className={`border p-2 ${title === 'Ms' ? 'bg-primary text-light fw-bold' : ''}`}
                            style={{ borderRadius: "0.5rem", cursor: "pointer" }}
                            onClick={() => handleTitle('Ms')}
                        >
                            Ms
                        </p>
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required />
                    </div>

                    <div className="form-group itemdata">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required />
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "12px" }}>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Select" required />
                    </div>

                    <div className="form-group itemdata">
                        <label htmlFor="passportNumber">Passport Number:</label>
                        <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} placeholder="Pasport Number" required />
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Select Country" required />
                    </div>

                    <div className="form-group itemdata">
                        <label htmlFor="city">City:</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Select city" required />
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="text" name="contactNumber" placeholder="Contect number" value={formData.contactNumber} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    </div>
                </div>

                <button type="submit" className="submit-button" style={{ borderRadius: "2rem", width: "150px" }}>Next</button>
            </form>
        </div>
    );
}

export default UserForm;
