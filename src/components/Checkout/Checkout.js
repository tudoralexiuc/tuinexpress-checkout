import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaIdeal } from 'react-icons/fa';
import GlobalStyles from '../../GlobalStyles';
import { Link } from 'react-router-dom';
import { Body, Footer, NavBar } from '../../AppStyles';
import Logo from '../Product/logo/logo.svg';
import chair from '../Product/image/chair.jpg';
import React, { useState } from 'react';
import { ShippingSection } from './ShippingSection';
import PaymentSection from './PaymentSection';

export function Checkout() {
  const [infoSection, setInfoSection] = useState(false);
  const [paymentInputted, setPaymentInputted] = useState(false);

  const handleInfo = (event) => {
    let newValue = !infoSection;
    setInfoSection(newValue);
  };

  const handlePaymentInputted = (event) => {
    setPaymentInputted(true);
  };
  const [infoPayment, setInfoPayment] = useState(false);

  const handlePayment = (event) => {
    let newValue = !infoPayment;
    setInfoPayment(newValue);
  };

  return (
    <>
      <GlobalStyles />
      <Body>
        <NavBar>
          <div className="icons">
            <div></div>
            <div></div>
          </div>
          <img src={Logo} className="logo" alt="Logo" />
          <Link style={{ textDecoration: 'none' }} to="/" as={Link}>
            <div className="backButton">Back</div>
          </Link>
        </NavBar>
        <div className="checkout-container">
          <div className="left-fields">
            <div className="shipping-field">
              <div className="top-content">
                <div className="green-circle">1</div>
                <h2>SHIPPING</h2>
              </div>
              <div>
                {infoSection ? (
                  <ShippingSection />
                ) : (
                  <div className="bottom-content">
                    <h5>Add Shipping Address</h5>
                    <div className="green-circle" onClick={handleInfo}>
                      >
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="delivery-field">
              <div className="top-content">
                <div className="green-circle">2</div>
                <h2>DELIVERY</h2>
              </div>
              <div className="bottom-content">
                <div className="delivery-content">
                  <input type="radio" value="delivery" name="gender" />
                  <div>
                    <h5 className="delivery-date">Tue 15 Nov</h5>
                    <h5>€7.99 DPD Economy Service</h5>
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="delivery-content">
                  <input type="radio" value="delivery" name="gender" />
                  <div>
                    <h5 className="delivery-date">Mon 14 Nov - Tue 15 Nov</h5>
                    <h5>€13.99 FedEx Priority Service</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-field">
              <div className="top-content">
                <div className="green-circle">3</div>
                <h2>PAYMENT</h2>
              </div>
              {infoPayment ? (
                <PaymentSection handlePayment={handlePaymentInputted} />
              ) : (
                <div className="bottom-content">
                  <h5>Add New Payment Card</h5>
                  <div className="green-circle" onClick={handlePayment}>
                    >
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="right-fields">
            <div className="order-container">
              <h2>ORDER SUMMARY</h2>
              <h6>1 item</h6>
            </div>
            <div className="item-container">
              <div className="items-container">
                <img src={chair} className="chair-image" />
                <div>
                  <h6>Chair</h6>
                  <h6>Quantity 1</h6>
                </div>
              </div>
              <h6>€79.00</h6>
            </div>
            <div className="promo-container">
              <h5>Add Gift Card / Promo code</h5>
              <h5>></h5>
            </div>
            <div className="price-container">
              <div>
                <h5>Subtotal:</h5>
                <h5>€79.00</h5>
              </div>
              <div>
                <h5>Shipping:</h5>
                <h5>€7.99</h5>
              </div>
              <div>
                <h5>Tax:</h5>
                <h5>€9.99</h5>
              </div>
              <div>
                <h5>Total:</h5>
                <h5>€96.98</h5>
              </div>
              {paymentInputted ? (
                <button className="button-order2">PLACE ORDER</button>
              ) : (
                <button className="button-order">PLACE ORDER</button>
              )}
            </div>
          </div>
        </div>
        <Footer>
          <div className="footer-wrapper">
            <div className="footer-items">
              <h6>Terms & Conditions</h6>
              <h6>Privacy Policy</h6>
              <h6>Other Policies</h6>
            </div>
            <div className="footer-items">
              <h1>
                <FaIdeal />
              </h1>
              <h1>
                <FaCcMastercard />
              </h1>
              <h1>
                <FaCcVisa />
              </h1>
              <h1>
                <FaCcPaypal />
              </h1>
            </div>
            <div className="footer-items">
              <h6>Copyright © 2010 - 2022 Tuinexpress.nl</h6>
            </div>
          </div>
        </Footer>
      </Body>
    </>
  );
}
