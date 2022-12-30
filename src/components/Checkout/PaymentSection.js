import React from 'react';
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaIdeal } from 'react-icons/fa';

export default function PaymentSection() {
  return (
    <div>
      <div className="payment-container">
        <div>
          <input type="radio" value="payment" name="ideal" /> IDEAL
        </div>
        <div>
          <h1>
            <FaIdeal />
          </h1>
        </div>
      </div>
      <div className="payment-container">
        <div>
          <input type="radio" value="payment" name="mastercard" /> MasterCard
        </div>
        <div>
          <h1>
            <FaCcMastercard />
          </h1>
        </div>
      </div>
      <div className="payment-container">
        <div>
          <input type="radio" value="payment" name="visa" /> Visa
        </div>
        <div>
          <h1>
            <FaCcVisa />
          </h1>
        </div>
      </div>
      <div className="payment-container">
        <div>
          <input type="radio" value="payment" name="paypal" /> PayPal
        </div>
        <div>
          <h1>
            <FaCcPaypal />
          </h1>
        </div>
      </div>
    </div>
  );
}
