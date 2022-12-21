import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const NavBar = styled.div`
  padding: 20px 50px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 2px solid rgb(0, 0, 0, 0.05);
`;

export const MainContainer = styled.div`
  // position: relative;
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 500;
`;

export const ProductList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  line-height: 75px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
  align-items: stretch;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
  }
`;

export const Footer = styled.div`
  background: #2bb48c;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    height: 250px;
    margin-top: 2rem;
  }
`;
