import React, { useState, useContext, useEffect } from 'react';
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaIdeal } from 'react-icons/fa';

export default function PaymentSection(props) {
  const [masterCardPressed, setMasterCardPressed] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [displayPayment, setDisplayPayment] = useState(false);
  const handleCardNumber = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolder = (event) => {
    setCardHolder(event.target.value);
  };

  const handleLocalPayment = (event) => {
    setDisplayPayment(true);
  };
  const handleMasterCard = (event) => {
    setMasterCardPressed(true);
  };
  return (
    <div>
      <div className="payment-container">
        <div>
          <input type="radio" value="payment" name="payment" /> IDEAL
        </div>
        <div>
          <h1>
            <FaIdeal />
          </h1>
        </div>
      </div>
      <div className="payment-container">
        <div>
          <input
            type="radio"
            value="payment"
            name="payment"
            onClick={handleMasterCard}
          />
          MasterCard
        </div>
        <div>
          <h1>
            <FaCcMastercard />
          </h1>
          <div>
            {masterCardPressed && !displayPayment ? (
              <div className="masterCard-Payment">
                <div className="masterCard-Fields">
                  <label>CARD HOLDER</label>
                  <input
                    type="text"
                    name="cardHolder"
                    onChange={handleCardHolder}
                  />
                </div>
                <div className="masterCard-Fields">
                  <label>CARD NUMBER*</label>
                  <input
                    type="text"
                    name="cardNumber"
                    onChange={handleCardNumber}
                  />
                </div>
                <button
                  onClick={() => {
                    props.handlePayment();
                    handleLocalPayment();
                  }}
                  className="masterCard-Fieldss"
                >
                  SAVE PAYMENT
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {masterCardPressed && displayPayment ? (
              <div>
                {cardHolder}
                {cardNumber}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="payment-container">
        <div>
          <input type="radio" value="payment" name="payment" /> Visa
        </div>
        <div>
          <h1>
            <FaCcVisa />
          </h1>
        </div>
      </div>
      <div className="payment-container">
        <div>
          <input type="radio" value="payment" name="payment" /> PayPal
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
