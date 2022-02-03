import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
// import { FaShippingFast } from "react-icons/fa";
// import { TiShoppingCart, TiThumbsUp } from "react-icons/ti";

const Service = () => {
  return (
    <ServiceContainer layout>
      <TitleContainer>
        <h1>Services</h1>
        <h3>A Building with Four Walls and Tomorrow Inside</h3>
      </TitleContainer>
      <AllServices>
        <ServiceItem>
          {/* <TiShoppingCart fontSize={"10rem"} color={"#f08d0c"} /> */}
          <img
            src={require("../../assets/serviceIcons/shopping-cart.gif")}
            alt={"shopping-cart"}
          />
          <ServiceItemContent>
            <h3>24/7 Availablity</h3>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
          </ServiceItemContent>
        </ServiceItem>
        <ServiceItem>
          {/* <TiThumbsUp fontSize={"10rem"} color={"#f08d0c"} /> */}
          <img
            src={require("../../assets/serviceIcons/support.gif")}
            alt={"tech-support"}
          />
          <ServiceItemContent>
            <h3>Customer Support</h3>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
          </ServiceItemContent>
        </ServiceItem>
        <ServiceItem>
          {/* <FaShippingFast fontSize={"10rem"} color={"#f08d0c"} /> */}
          <img
            src={require("../../assets/serviceIcons/truck.gif")}
            alt={"truck"}
          />
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

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
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

const AllServices = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;

const ServiceItem = styled(motion.div)`
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
      width: 5rem;
    }
`;

const ServiceItemContent = styled(motion.div)`
  width: 100%;
  text-align: center;
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #59d5d5;
    text-transform: uppercase;
  }

  p {
    width: 80%;
    margin: 0 auto;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #09383a;
  }
`;

export default Service;
