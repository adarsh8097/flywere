import React, { useState, useEffect } from "react";
import './FormTicket.css';

function UserFormReview() {
    // Retrieve data from sessionStorage
    const userformdata = JSON.parse(sessionStorage.getItem('userFormData')) || {};

    // Initialize formData state with the retrieved data
    const [formData, setFormData] = useState({
        title: userformdata.title || "",
        firstName: userformdata.firstName || "",
        lastName: userformdata.lastName || "",
        dateOfBirth: userformdata.dateOfBirth || "",
        passportNumber: userformdata.passportNumber || "",
        country: userformdata.country || "",
        city: userformdata.city || "",
        contactNumber: userformdata.contactNumber || "",
        email: userformdata.email || ""
    });

    // You can remove handleChange if you don't need it since the fields are readonly
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Select Title:</label>
                    <div className="d-flex" style={{ gap: "20px" }}>
                        <div>
                            <p className="border p-2 bg-primary text-white" style={{ borderRadius: "0.5rem", }}>
                                {formData.title}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName} 
                            placeholder="First name" 
                            required 
                            readOnly 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName} 
                            placeholder="Last name" 
                            required 
                            readOnly 
                        />
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "12px" }}>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input 
                            type="text" 
                            name="dateOfBirth" 
                            value={formData.dateOfBirth} 
                            placeholder="Select" 
                            required 
                            readOnly 
                        />
                    </div>

                    <div className="form-group ">
                        <label htmlFor="passportNumber">Passport Number:</label>
                        <input 
                            type="text" 
                            name="passportNumber" 
                            value={formData.passportNumber} 
                            placeholder="Passport Number" 
                            required 
                            readOnly 
                        />
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input 
                            type="text" 
                            name="country" 
                            value={formData.country} 
                            placeholder="Select Country" 
                            required 
                            readOnly 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input 
                            type="text" 
                            name="city" 
                            value={formData.city} 
                            placeholder="Select city" 
                            required 
                            readOnly 
                        />
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input 
                            type="text" 
                            name="contactNumber" 
                            value={formData.contactNumber} 
                            placeholder="Contact number" 
                            required 
                            readOnly 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            placeholder="Email" 
                            required 
                            readOnly 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserFormReview;
