import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import { FaShippingFast } from "react-icons/fa";
import { TiShoppingCart, TiThumbsUp } from "react-icons/ti";

const Service = () => {
  return (
    <ServiceContainer>
      <TitleContainer>
        <h1>Services</h1>
        <h3>A Building with Four Walls and Tomorrow Inside</h3>
      </TitleContainer>
      <AllServices>
        <ServiceItem>
          <TiShoppingCart fontSize={"10rem"} color={"#f08d0c"} />
          <ServiceItemContent>
            <h3>24/7 Availablity</h3>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
          </ServiceItemContent>
        </ServiceItem>
        <ServiceItem>
          <TiThumbsUp fontSize={"10rem"} color={"#f08d0c"} />
          <ServiceItemContent>
            <h3>Customer Support</h3>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
          </ServiceItemContent>
        </ServiceItem>
        <ServiceItem>
          <FaShippingFast fontSize={"10rem"} color={"#f08d0c"} />
          <ServiceItemContent>
            <h3>Fast Delivery</h3>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
          </ServiceItemContent>
        </ServiceItem>
      </AllServices>
    </ServiceContainer>
  );
};

const ServiceContainer = styled(motion.div)`
  width: 100%;
  padding: 0 10rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

const AllServices = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 1rem;
`;

const ServiceItem = styled(motion.div)`
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const ServiceItemContent = styled(motion.div)`
    width: 100%;
    text-align: center;
    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #f08d0c;
        text-transform: uppercase;
    }

    p {
        width: 80%;
        margin: 0 auto;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: #000000;
    }
`;

export default Service;
