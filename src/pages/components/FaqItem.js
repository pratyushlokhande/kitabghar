import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Toggle
import Toggle from "./Toggle";


const FaqItem = ({ id, question, header, answer }) => {
    return (
        <Toggle question={question} id={id}>
            <FaqItemContainer>
                <h3>{header}</h3>
                <p>{answer}</p>
            </FaqItemContainer>
        </Toggle>
    )
}

const FaqItemContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #59d5d5;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: #000000c5;
  }
`;

export default FaqItem;