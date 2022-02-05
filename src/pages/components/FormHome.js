import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const FormHome = () => {
  return (
    <FormHomeContainer layout>
      <TitleContainer>
        <h1>PAY LESS STUDY MORE</h1>
        <Title>KITABGHAR</Title>
        <h2>अब पढ़ाई, सिर्फ 20% में</h2>
      </TitleContainer>
    </FormHomeContainer>
  );
};

const FormHomeContainer = styled(motion.div)`
  width: 100%;
  height: 60vh;
  background-color: #69d2e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;

  h1 {
    font-size: 2rem;
    color: #f08d0c;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const Title = styled(motion.div)`
  width: 100%;
  text-align: center;
  font-size: 8rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 9px 12px 7px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;


export default FormHome;
