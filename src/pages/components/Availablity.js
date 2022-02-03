import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
// import { FaShippingFast } from "react-icons/fa";
// import { TiShoppingCart, TiThumbsUp } from "react-icons/ti";

const Availablity = () => {
  return (
    <AvailablityContainer layout>
      <TitleContainer>
        <h1>Check Availablity</h1>
        <h3>A Building with Four Walls and Tomorrow Inside</h3>
      </TitleContainer>

      <AvailablityContent>
          <AvailablityLeft>
              <AvailablityHeader>
                <h2>Find what you are looking for..</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, velit dolorum recusandae quisquam ipsa possimus sapiente incidunt praesentium esse rem.</p>
              </AvailablityHeader>
              <ButtonContainer>
                <Button>Find Item</Button>
                <Button>Request Item</Button>
              </ButtonContainer>
          </AvailablityLeft>
            <AvailablityRight>
                <img src={require('../../assets/basket.png')} alt="basket.png" />
            </AvailablityRight>
      </AvailablityContent>
      
    </AvailablityContainer>
  );
};

const AvailablityContainer = styled(motion.div)`
  width: 100%;
  padding: 5rem 10rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: #59d5d5;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #f08d0c;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

const AvailablityContent = styled(motion.div)`
    width: 100%;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const AvailablityLeft = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem; 
  
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

const AvailablityHeader = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #09383a;
  }
`;

const AvailablityRight = styled(motion.div)`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        order: 1;
    }
`;

const ButtonContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 1rem;
`;

const Button = styled(motion.a)`
  width: 10rem;
  height: 2.5rem;
  background-color: #f08d0c;
  color: #000000;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export default Availablity;