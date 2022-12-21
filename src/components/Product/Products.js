import React, { useState, useContext, useEffect } from 'react';
import {
  FaUserAlt,
  FaHeart,
  FaIdeal,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
} from 'react-icons/fa';
import GlobalStyles from '../../GlobalStyles';
import Logo from './logo/logo.svg';
import {
  NavBar,
  OverLay,
  MainContainer,
  ProductList,
  Footer,
  Body,
} from '../../AppStyles';
import Context from '../../store/Context';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function Products() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <GlobalStyles />
      <Body>
        <NavBar>
          <div className="icons">
            <FaUserAlt />
            <FaHeart />
          </div>
          <img src={Logo} className="logo" alt="Logo" />
          <Cart
            isToggle={isToggle}
            setToggle={setToggle}
            carts={context.carts}
            removeProductFromCart={context.removeProductFromCart}
            clearCart={context.clearCart}
          />
        </NavBar>

        <MainContainer>
          {isToggle && <OverLay />}
          <ProductList onClick={() => setToggle(true)}>
            {context.products.map((p) => (
              <Product
                key={p.id}
                id={p.id}
                imageURL={p.imageURL}
                price={p.price}
                title={p.title}
                addProductToCart={context.addProductToCart}
              />
            ))}
          </ProductList>
        </MainContainer>

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
