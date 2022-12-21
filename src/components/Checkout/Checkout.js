import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaIdeal } from 'react-icons/fa';
import GlobalStyles from '../../GlobalStyles';
import { Link } from 'react-router-dom';
import { Body, Footer, NavBar } from '../../AppStyles';
import Logo from '../Product/logo/logo.svg';

export function Checkout() {
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
