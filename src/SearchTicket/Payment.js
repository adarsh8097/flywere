import React from "react";
import './Payment.css';
import { FaCcMastercard } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
function PaymentMode() {
    return (
        <>
        <div className="payment-form">
            {/* <h2>Payment Information</h2> */}
            <form>
                <div className="d-flex" style={{gap:"10px"}}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                 
                   <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" maxLength="16" required />
                   
                  
                </div>

                <div className="form-group">
                    <label htmlFor="expiryYear">Expiry Year</label>
                    <input type="text" id="expiryYear" name="expiryYear" placeholder="YYYY" maxLength="4" required />
                </div>
                </div>

                <div className="d-flex" style={{gap:"10px"}}>
                <div className="form-group">
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" id="cvc" name="cvc" placeholder="123" maxLength="3" required />
                </div>

                <div className="form-group">
                    <label htmlFor="nameOnCard">Name on Card</label>
                    <input type="text" id="nameOnCard" name="nameOnCard" placeholder="John Doe" required />
                </div>
                    </div>

                
        </form>
        <div>
                <button className="border border-info text-info mt-2 p-2" style={{borderRadius:"2rem",marginRight:"2rem",width:"150px"}}>Previous</button>
                <button className="btn btn-primary" style={{borderRadius:"2rem",marginRight:"2rem",width:"150px"}}>Next</button>
            </div>
        </div>
        </>
    );
}

export default PaymentMode;
