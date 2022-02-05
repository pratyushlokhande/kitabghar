import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion, useIsPresent } from "framer-motion";

const FormHome = () => {

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const isPresent = useIsPresent();

  return (
    <FormHomeContainer
      initial={{ height: "100vh" }}
      animate={{ height: "60vh" }}
      exit={{ height: "100vh" }}
      transition={{ ...transition, delay: isPresent ? 0 : 0.6 }}
      layout
    >
      <TitleContainer
        initial={{ marginTop: "0rem" }}
        animate={{ marginTop: "2.5rem" }}
        exit={{ marginTop: "0rem" }}
        transition={{ ...transition, delay: isPresent ? 0 : 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, delay: isPresent ? 0.6 : 0 }}
        >
          PAY LESS STUDY MORE
        </motion.h1>
        <Title>KITABGHAR</Title>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, delay: isPresent ? 0.6 : 0 }}
        >
          अब पढ़ाई, सिर्फ 20% में
        </motion.h2>
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
