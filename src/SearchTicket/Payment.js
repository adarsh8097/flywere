import React, { useState } from "react";
import './Payment.css';
import { useNavigate } from "react-router-dom";

function PaymentMode() {
    const navigate = useNavigate();
      
    const [data, setFormData] = useState({
        cardNumber: "",
        expiryYear: "",
        cvc: "",
        nameOnCard: "",
    });

    // Handle input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...data,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 
      
        navigate('../finalticket');
    };

    // Navigate to the previous page
    const handlePrevious = () => {
        navigate('/');
    };

    return (
        <div className="payment-form">
            <form onSubmit={handleSubmit}>
                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            maxLength="16"
                            value={data.cardNumber}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="expiryYear">Expiry Year</label>
                        <input
                            type="text"
                            id="expiryYear"
                            name="expiryYear"
                            placeholder="YYYY"
                            maxLength="4"
                            value={data.expiryYear}
                            onChange={handleInput}
                            required
                        />
                    </div>
                </div>

                <div className="d-flex itemdata" style={{ gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            placeholder="123"
                            maxLength="3"
                            value={data.cvc}
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nameOnCard">Name on Card</label>
                        <input
                            type="text"
                            id="nameOnCard"
                            name="nameOnCard"
                            placeholder="John Doe"
                            value={data.nameOnCard}
                            onChange={handleInput}
                            required
                        />
                    </div>
                </div>

                <div className="d-flex mt-2" style={{ gap: "10px" }}>
                    <button
                        className="border border-info text-info p-2"
                        style={{ borderRadius: "2rem", width: "150px" }}
                        type="button"
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        style={{ borderRadius: "2rem", width: "150px" }}
                        type="submit"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PaymentMode;
