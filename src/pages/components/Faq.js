import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";


// Component
import FaqItem from "./FaqItem";

// Import Data
import getFaqData from "../../data/FaqData";

const Faq = () => {
  return (
    <FaqContainer layout>
      <TitleContainer layout>
        <h1>Faq</h1>
        <h3>A Building with Four Walls and Tomorrow Inside</h3>
      </TitleContainer>
      <AllFaq>
        <AnimateSharedLayout>
        {getFaqData().map((faq) => (
          <FaqItem id={faq.id} question={faq.question} header={faq.header} answer={faq.answer} key={faq.id} />
        ))}
        </AnimateSharedLayout>
      </AllFaq>
    </FaqContainer>
  );
};

const FaqContainer = styled(motion.div)`
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

const AllFaq = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Faq;
