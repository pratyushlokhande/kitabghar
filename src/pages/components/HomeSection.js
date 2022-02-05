import React from 'react';

// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Link } from "react-router-dom";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const HomeSection = () => {
    return (
      <HomeSectionContainer layout>
        <TitleContainer>
          <motion.h1 exit={{ opacity: 0 }} transition={transition}>
            PAY LESS STUDY MORE
          </motion.h1>
          <Title whileHover={{ scale: 1.05 }} transition={transition}>
            KITABGHAR
          </Title>
          <motion.h2 exit={{ opacity: 0 }} transition={transition}>
            अब पढ़ाई, सिर्फ 20% में
          </motion.h2>
        </TitleContainer>
        <ButtonContainer>
          <Button
            to="/form"
            state={{ from: "buy" }}
          >
            BUY
          </Button>
          <Button
            to="/form"
            state={{ from: "sell" }}
          >
            SELL
          </Button>
        </ButtonContainer>
      </HomeSectionContainer>
    );
}

const HomeSectionContainer = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-color: #69d2e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: #f08d0c;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const Title = styled(motion.div)`
    /* width: 100%; */
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 8rem;
    font-weight: 500;
    color: #ffffff;
    text-shadow: 9px 12px 7px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 5rem; 
    }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
    width: 10rem;
    height: 2.5rem;
    background-color: #f08d0c;
    color: #000000;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    font-weight: 500;
    text-decoration: none;
`;

export default HomeSection;