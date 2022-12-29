import styled from "styled-components";

export const ProductContainer = styled.div`
  min-height: 100vh;

  width: 100%;
  padding-top: 3rem;
  background: #EFEFEF;
  /* color: #fff; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProductCard = styled.div`
  margin: 0.2rem;
  line-height: 1.5;
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const ProductWrapper = styled.div`
  margin: 0 5px;
  padding-bottom: 20px;
`;
export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 3rem;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background: #FF8C42;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #7B3000;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
`;
export const GoHomeButton = styled.button`
  width: 250px !important;

  font-size: 1.1rem !important;
  padding: 1rem 3rem;
  border: none;
  background: #FF8C42;
  color: #fff;
  transition: 0.2 ease-out;
  margin: 40px auto 80px auto;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #7B3000;
    transition: 0.2s ease-out;
  }
`;
export const QuantityContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const Quantity = styled.span`
  width: 35px;
  height: 30px;
  fontsize: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #FF8C42; */
`;
